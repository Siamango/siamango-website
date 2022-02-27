import { useCallback, useEffect, useMemo, useState } from "react";
import {ConnectToStart, Counter, CounterContainer, MintButton, MintContainer, SoldOut} from "./MintElemtes";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import Countdown from "react-countdown";
import { CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import * as anchor from "@project-serum/anchor";
import {
    awaitTransactionSignatureConfirmation,
    CandyMachineAccount,
    getCandyMachineState,
    mintOneToken,
} from "../../candy-machine";
import { WalletButton } from "../Collective/CollectiveElements";

export interface MintProps
{
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  txTimeout: number;
  rpcHost: string;
}

const MintSection = (props: MintProps) =>
{
    const [isUserMinting, setIsUserMinting] = useState(false);
    const [balance, setBalance] = useState<number>();
    const [startDate, setDate] = useState(new Date());//'2022-02-01T21:00:00Z'));
    const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
    const [num,setnum] = useState(0);
    const [isActive, setActive] = useState(false);
    const wallet = useWallet();

    const [alertState, setAlertState] = useState<AlertState>({
        open: false,
        message: "",
        severity: undefined,
      });
    
    const anchorWallet = useMemo(() => {
        if (
          !wallet ||
          !wallet.publicKey ||
          !wallet.signAllTransactions ||
          !wallet.signTransaction
        ) {
          return;
        }
    
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
            const cndy = await getCandyMachineState( anchorWallet, props.candyMachineId, props.connection);
            const date = new Date(cndy.state.goLiveDate?.toNumber()*1000)
            console.log(date.toString());
            setDate(date);
            setnum(1);
            setCandyMachine(cndy);

          } 
          catch (e) {
            console.log('There was a problem fetching Candy Machine state');
            console.log(e);
          }
      }

      
    }, [anchorWallet, props.candyMachineId, props.connection]);

    const onMint = async () => {
        try {
            setIsUserMinting(true);
            document.getElementById('#identity')?.click();
            if (wallet.connected && candyMachine?.program && wallet.publicKey) {
              const mintTxId = (
                await mintOneToken(candyMachine, wallet.publicKey)
              )[0];
      
              let status: any = { err: true };
              if (mintTxId) 
              {
                status = await awaitTransactionSignatureConfirmation(
                  mintTxId,
                  props.txTimeout,
                  props.connection,
                  true,
                );
              }
      
              if (status && !status.err) {
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
                message = 'Transaction Timeout! Please try again.';
              } else if (error.message.indexOf('0x137')) {
                message = `SOLD OUT!`;
              } else if (error.message.indexOf('0x135')) {
                message = `Insufficient funds to mint. Please fund your wallet.`;
              }
            } else {
              if (error.code === 311) {
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
          } finally {
            setIsUserMinting(false);
          }
    };

    useEffect(() => {
        refreshCandyMachineState();
      }, [anchorWallet, props.candyMachineId, props.connection, refreshCandyMachineState, ]);

    useEffect( () => {
      (async () => {
          if (wallet?.publicKey) {
            const balance = await props.connection.getBalance(wallet.publicKey);
            setBalance(balance / LAMPORTS_PER_SOL);
          }
        })();
    }, [wallet.publicKey]);

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
      refreshCandyMachineState();
      const now = new Date();
        if(startDate < now )
        {
          //console.log("set true");
          setActive(true);
        }
        
    }, []);

    window.addEventListener('resize', showButton);

    return(
        <MintContainer id="mint">
          {showWalletButton?<WalletButton wallet={wallet} balance={balance}/>:""}
          {   
            !candyMachine?.state.isSoldOut
            ?  
                !wallet.connected
                ?  <ConnectToStart>Connect your wallet to mint </ConnectToStart>
                :   candyMachine?.state.isActive && isActive
                    ? (isUserMinting 
                          ? (<CircularProgress />) 
                          : (
                              <>
                                <h1 style={{textShadow: "0 0px 10px #cd3594"}}>
                                  {candyMachine?.state.itemsRedeemed }/{candyMachine?.state.itemsAvailable}
                                </h1>
                                <MintButton onclick={onMint}> MINT YOUR CLOUDY </MintButton>
                              </>
                              )
                      )

                    : (<Countdown
                        date={startDate}
                        onMount={({ completed }) => completed}
                        onComplete={() => {setActive(true); refreshCandyMachineState(); }}
                        renderer={renderCounter}
                        key={num}
                      />)
                    
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

interface AlertState {
    open: boolean;
    message: string;
    severity: "success" | "info" | "warning" | "error" | undefined;
  }
  
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

export default MintSection;