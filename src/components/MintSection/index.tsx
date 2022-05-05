import { useCallback, useEffect, useMemo, useState } from "react";
import {ConnectToStart, Counter, CounterContainer, MintContainer, SoldOut} from "./MintElemtes";
import Countdown from "react-countdown";
import { WalletButton } from "../CollectiveSections/CollectiveSectionElements";
import { CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { LAMPORTS_PER_SOL, PublicKey, Transaction } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import {
  awaitTransactionSignatureConfirmation,
  CandyMachineAccount,
  CANDY_MACHINE_PROGRAM,
  getCandyMachineState,
  mintOneToken,
  getCollectionPDA,
  SetupState,
  createAccountsForMint,
} from "../../candy-machine";
import { MintButton } from "./MintButton";
import { GatewayProvider } from "@civic/solana-gateway-react";
import { sendTransaction } from "../../connection";
import { AlertState, toDate } from "../../utils";


export interface MintProps
{
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  txTimeout: number;
  rpcHost: string;
}

export const MintSection = (props: MintProps) =>
{
    const [isUserMinting, setIsUserMinting] = useState(false);
    const [balance, setBalance] = useState<number>();
    const [itemsRemaining, setItemsRemaining] = useState<number>();
    const [isWhitelistUser, setIsWhitelistUser] = useState(false);
    const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
    const [discountPrice, setDiscountPrice] = useState<anchor.BN>();
    const [endDate, setEndDate] = useState<Date>();
    const [isPresale, setIsPresale] = useState(false);
    const [setupTxn, setSetupTxn] = useState<SetupState>();
    const [needTxnSplit, setNeedTxnSplit] = useState(true);
    const [isActive, setIsActive] = useState(false);

    const [startDate, setDate] = useState<Date>();
    const [num,setnum] = useState(0);
    
    const wallet = useWallet();

    const [alertState, setAlertState] = useState<AlertState>({
      open: false,
      message: "",
      severity: undefined,
    });
    
    const anchorWallet = useMemo(() => {
        if (!wallet || !wallet.publicKey || !wallet.signAllTransactions || !wallet.signTransaction) return;
        
        return {
          publicKey: wallet.publicKey,
          signAllTransactions: wallet.signAllTransactions,
          signTransaction: wallet.signTransaction,
        } as anchor.Wallet;
      }, [wallet]);

      const refreshCandyMachineState = useCallback(async () => {
        if (!anchorWallet) {
          return;
        }
    
        if (props.candyMachineId) {
          try {
            const cndy = await getCandyMachineState(
              anchorWallet,
              props.candyMachineId,
              props.connection,
            );
            let active =
              cndy?.state.goLiveDate?.toNumber() < new Date().getTime() / 1000;
            let presale = false;
            // whitelist mint?
            if (cndy?.state.whitelistMintSettings) {
              // is it a presale mint?
              if (
                cndy.state.whitelistMintSettings.presale &&
                (!cndy.state.goLiveDate ||
                  cndy.state.goLiveDate.toNumber() > new Date().getTime() / 1000)
              ) {
                presale = true;
              }
              // is there a discount?
              if (cndy.state.whitelistMintSettings.discountPrice) {
                setDiscountPrice(cndy.state.whitelistMintSettings.discountPrice);
              } else {
                setDiscountPrice(undefined);
                // when presale=false and discountPrice=null, mint is restricted
                // to whitelist users only
                if (!cndy.state.whitelistMintSettings.presale) {
                  cndy.state.isWhitelistOnly = true;
                }
              }
              // retrieves the whitelist token
              const mint = new anchor.web3.PublicKey(
                cndy.state.whitelistMintSettings.mint,
              );
    
              //await connection.getTokenAccountsByOwner(buyer, {mint:mint})).value[0].pubkey
    
              const token = (await props.connection.getTokenAccountsByOwner(anchorWallet.publicKey,{mint:mint})).value[0].pubkey;
    
              try {
                const balance = await props.connection.getTokenAccountBalance(
                  token,
                );
                let valid = parseInt(balance.value.amount) > 0;
                // only whitelist the user if the balance > 0
                setIsWhitelistUser(valid);
                active = (presale && valid) || active;
              } catch (e) {
                setIsWhitelistUser(false);
                // no whitelist user, no mint
                if (cndy.state.isWhitelistOnly) {
                  active = false;
                }
                console.log('There was a problem fetching whitelist token balance');
                console.log(e);
              }
            }
            // datetime to stop the mint?
            if (cndy?.state.endSettings?.endSettingType.date) {
              setEndDate(toDate(cndy.state.endSettings.number));
              if (
                cndy.state.endSettings.number.toNumber() <
                new Date().getTime() / 1000
              ) {
                active = false;
              }
            }
            // amount to stop the mint?
            if (cndy?.state.endSettings?.endSettingType.amount) {
              let limit = Math.min(
                cndy.state.endSettings.number.toNumber(),
                cndy.state.itemsAvailable,
              );
              if (cndy.state.itemsRedeemed < limit) {
                setItemsRemaining(limit - cndy.state.itemsRedeemed);
              } else {
                setItemsRemaining(0);
                cndy.state.isSoldOut = true;
              }
            } else {
              setItemsRemaining(cndy.state.itemsRemaining);
            }
    
            if (cndy.state.isSoldOut) {
              active = false;
            }
    
            const [collectionPDA] = await getCollectionPDA(props.candyMachineId);
            const collectionPDAAccount =
              await cndy.program.provider.connection.getAccountInfo(collectionPDA);
    
            setIsActive((cndy.state.isActive = active));
            setIsPresale((cndy.state.isPresale = presale));
            setCandyMachine(cndy);
    
            const txnEstimate =
              892 +
              (!!collectionPDAAccount && cndy.state.retainAuthority ? 182 : 0) +
              (cndy.state.tokenMint ? 177 : 0) +
              (cndy.state.whitelistMintSettings ? 33 : 0) +
              (cndy.state.whitelistMintSettings?.mode?.burnEveryTime ? 145 : 0) +
              (cndy.state.gatekeeper ? 33 : 0) +
              (cndy.state.gatekeeper?.expireOnUse ? 66 : 0);
    
            setNeedTxnSplit(txnEstimate > 1230);
          } catch (e) {
            if (e instanceof Error) {
              if (e.message === `Account does not exist ${props.candyMachineId}`) {
                setAlertState({
                  open: true,
                  message: `Couldn't fetch candy machine state from candy machine with address: ${props.candyMachineId}, using rpc: ${props.rpcHost}! You probably typed the REACT_APP_CANDY_MACHINE_ID value in wrong in your .env file, or you are using the wrong RPC!`,
                  severity: 'error',
                  noHide: true,
                });
              } else if (e.message.startsWith('failed to get info about account')) {
                setAlertState({
                  open: true,
                  message: `Couldn't fetch candy machine state with rpc: ${props.rpcHost}! This probably means you have an issue with the REACT_APP_SOLANA_RPC_HOST value in your .env file, or you are not using a custom RPC!`,
                  severity: 'error',
                  noHide: true,
                });
              }
            } else {
              setAlertState({
                open: true,
                message: `${e}`,
                severity: 'error',
                noHide: true,
              });
            }
            console.log(e);
          }
        } else {
          setAlertState({
            open: true,
            message: `Your REACT_APP_CANDY_MACHINE_ID value in the .env file doesn't look right! Make sure you enter it in as plain base-58 address!`,
            severity: 'error',
            noHide: true,
          });
        }
      }, [anchorWallet, props.candyMachineId, props.connection, props.rpcHost]);
    
      const onMint = async (
        beforeTransactions: Transaction[] = [],
        afterTransactions: Transaction[] = [],
      ) => {
        try {
          setIsUserMinting(true);
          document.getElementById('#identity')?.click();
          if (wallet.connected && candyMachine?.program && wallet.publicKey) {
            let setupMint: SetupState | undefined;
            if (needTxnSplit && setupTxn === undefined) {
              setAlertState({
                open: true,
                message: 'Please sign account setup transaction',
                severity: 'info',
              });
              setupMint = await createAccountsForMint(
                candyMachine,
                wallet.publicKey,
              );
              let status: any = { err: true };
              if (setupMint.transaction) {
                status = await awaitTransactionSignatureConfirmation(
                  setupMint.transaction,
                  props.txTimeout,
                  props.connection,
                  true,
                );
              }
              if (status && !status.err) {
                setSetupTxn(setupMint);
                setAlertState({
                  open: true,
                  message:
                    'Setup transaction succeeded! Please sign minting transaction',
                  severity: 'info',
                });
              } else {
                setAlertState({
                  open: true,
                  message: 'Mint failed! Please try again!',
                  severity: 'error',
                });
                setIsUserMinting(false);
                return;
              }
            } else {
              setAlertState({
                open: true,
                message: 'Please sign minting transaction',
                severity: 'info',
              });
            }
    
            let mintOne = await mintOneToken(
              candyMachine,
              wallet.publicKey,
              beforeTransactions,
              afterTransactions,
              setupMint ?? setupTxn,
            );
            const mintTxId = mintOne[0];
    
            let status: any = { err: true };
            if (mintTxId) {
              status = await awaitTransactionSignatureConfirmation(
                mintTxId,
                props.txTimeout,
                props.connection,
                true,
              );
            }
    
            if (status && !status.err) {
              // manual update since the refresh might not detect
              // the change immediately
              let remaining = itemsRemaining! - 1;
              setItemsRemaining(remaining);
              setIsActive((candyMachine.state.isActive = remaining > 0));
              candyMachine.state.isSoldOut = remaining === 0;
              setSetupTxn(undefined);
              setAlertState({
                open: true,
                message: 'Congratulations! Mint succeeded!',
                severity: 'success',
              });
            } else {
              setAlertState({
                open: true,
                message: 'Mint failed! Please try again!',
                severity: 'error',
              });
            }
          }
        } catch (error: any) {
          let message = error.msg || 'Minting failed! Please try again!';
          if (!error.msg) {
            if (!error.message) {
              message = 'Transaction timeout! Please try again.';
            } else if (error.message.indexOf('0x137')) {
              console.log(error);
              message = `SOLD OUT!`;
            } else if (error.message.indexOf('0x135')) {
              message = `Insufficient funds to mint. Please fund your wallet.`;
            }
          } else {
            if (error.code === 311) {
              console.log(error);
              message = `SOLD OUT!`;
              window.location.reload();
            } else if (error.code === 312) {
              message = `Minting period hasn't started yet.`;
            }
          }
    
          setAlertState({
            open: true,
            message,
            severity: 'error',
          });
          // updates the candy machine state to reflect the latest
          // information on chain
          refreshCandyMachineState();
        } finally {
          setIsUserMinting(false);
        }
      };

    useEffect(() => {
      refreshCandyMachineState();
      (async () => {
        if (anchorWallet?.publicKey) 
        {
          const balance = await props.connection.getBalance((anchorWallet?.publicKey));
          setBalance(balance / LAMPORTS_PER_SOL);
        }
      })();
    }, [anchorWallet, props.candyMachineId, props.connection, refreshCandyMachineState]);

    const [showWalletButton, setButton] = useState(true);

    const showButton = () => {
      if (window.innerWidth <= 900) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect(() => {
      showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return(
        <MintContainer id="mint">
          {showWalletButton?<WalletButton wallet={wallet} balance={balance}/>:""}
          {   
            !candyMachine?.state.isSoldOut
            ?  
              !wallet.connected
              ? <ConnectToStart>Connect your wallet to mint</ConnectToStart>
              :  isActive
                ? isWhitelistUser
                  ? isUserMinting 
                    ? <CircularProgress />
                    : <>
                        <h1 style={{textShadow: "0 0px 10px #cd3594"}}>
                          {candyMachine?.state.itemsRedeemed }/{candyMachine?.state.itemsAvailable}
                        </h1>
                        <GatewayProvider
                          wallet={{
                            publicKey: wallet.publicKey || new PublicKey(CANDY_MACHINE_PROGRAM),
                            //@ts-ignore
                            signTransaction: wallet.signTransaction,
                          }}
                          gatekeeperNetwork={candyMachine?.state?.gatekeeper?.gatekeeperNetwork}
                          clusterUrl={props.rpcHost}
                          handleTransaction={async (transaction: Transaction) => {

                            setIsUserMinting(true);
                            const userMustSign = transaction.signatures.find(sig => sig.publicKey.equals(wallet.publicKey!));

                            if (userMustSign) 
                            {
                              setAlertState({
                                open: true,
                                message: 'Please sign one-time Civic Pass issuance',
                                severity: 'info',
                              });
                              
                              try 
                              {
                                transaction = await wallet.signTransaction!(transaction);
                              } 
                              catch (e) 
                              {
                                setAlertState({
                                  open: true,
                                  message: 'User cancelled signing',
                                  severity: 'error',
                                });
                                // setTimeout(() => window.location.reload(), 2000);
                                setIsUserMinting(false);
                                throw e;
                              }
                            } 
                            else 
                            {
                              setAlertState({
                                open: true,
                                message: 'Refreshing Civic Pass',
                                severity: 'info',
                              });
                            }

                            try 
                            {
                              await sendTransaction(
                                props.connection,
                                wallet,
                                transaction,
                                [],
                                true,
                                'confirmed',
                              );
                              
                              setAlertState({
                                open: true,
                                message: 'Please sign minting',
                                severity: 'info',
                              });
                            } 
                            catch (e) 
                            {
                              setAlertState({
                                open: true,
                                message: 'Solana dropped the transaction, please try again',
                                severity: 'error',
                              });
                              console.error(e);
                              // setTimeout(() => window.location.reload(), 2000);
                              setIsUserMinting(false);
                              throw e;
                            }

                            await onMint();
                          }}
                          broadcastTransaction={false}
                          options={{ autoShowModal: false }}
                        >
                          <MintButton 
                            candyMachine={candyMachine} 
                            isMinting={isUserMinting}
                            setIsMinting={val => setIsUserMinting(val)}
                            onMint={onMint}
                            isActive={true} 
                          /> 
                        </GatewayProvider>
                      </>
                  : "Mint is reserved to Gen0 holders"
                :
                  <Countdown
                  date={startDate}
                  onMount={({ completed }) => completed}
                  onComplete={() => {setIsActive(true); refreshCandyMachineState(); }}
                  renderer={renderCounter}
                  key={num}
                />
            :   <SoldOut/>
          }

            <Snackbar
              open={alertState.open}
              autoHideDuration={6000}
              onClose={() => setAlertState({ ...alertState, open: false })}
            >
              <Alert
                onClose={() => setAlertState({ ...alertState, open: false })}
                severity={alertState.severity}
                style={alertState.severity==="error"?{backgroundColor:"red"}:{backgroundColor:"green"}}
              >
                {alertState.message}
              </Alert>
            </Snackbar>
        </MintContainer>
    );
};

  
const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
      <CounterContainer>
          <Counter>
              <section>
                  <p>{days}</p>
                  <p><small>DAYS</small></p>
              </section>
              <span>:</span>
              <section>
                  <p>{hours}</p>
                  <p><small>HOURS</small></p>
              </section>
              <span>:</span>
              <section>
                  <p>{minutes}</p>
                  <p><small>MINUTES</small></p>
              </section>
              <span>:</span>
              <section>
                  <p>{seconds}</p>
                  <p><small>SECONDS</small></p>
              </section>
          </Counter>
      </CounterContainer>
  );
};