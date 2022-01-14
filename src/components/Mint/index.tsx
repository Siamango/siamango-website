import { useEffect, useState } from "react";
import {ConnectToStart, Counter, CounterContainer, MintButton, MintContainer, SoldOut} from "./MintElemtes";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import Countdown from "react-countdown";
import { CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import * as anchor from "@project-serum/anchor";
import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
} from "../../candy-machine";

export interface MintSectionProps
{
    candyMachineId: anchor.web3.PublicKey;
    config: anchor.web3.PublicKey;
    connection: anchor.web3.Connection;
    startDate: number;
    treasury: anchor.web3.PublicKey;
    txTimeout: number;
}

const MintSection = (props: MintSectionProps) =>
{
    const [balance, setBalance] = useState<number>();
    const [isActive, setIsActive] = useState(false); // true when countdown completes
    const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
    const [isMinting, setIsMinting] = useState(false);
    const [num, setNum] = useState(0); // true when user got to press MINT
    const [startDate, setStartDate] = useState(new Date(props.startDate));
    const [candyMachine, setCandyMachine] = useState<CandyMachine>();
    const [alertState, setAlertState] = useState<AlertState>({
        open: false,
        message: "",
        severity: undefined,
      });

    const wallet = useWallet();

    const onMint = async () => {
        try {
            setIsMinting(true);
            if (wallet.connected && candyMachine?.program && wallet.publicKey) 
            {
                const mintTxId = await mintOneToken(
                candyMachine,
                props.config,
                wallet.publicKey,
                props.treasury
            );

            const status = await awaitTransactionSignatureConfirmation( mintTxId, props.txTimeout, props.connection, "singleGossip", false);

            if (!status?.err) {
            setAlertState({
                open: true,
                message: "Congratulations! Mint succeeded!",
                severity: "success",
            });
            } else {
            setAlertState({
                open: true,
                message: "Mint failed! Please try again!",
                severity: "error",
            });
            }
            }
        } 
        catch (error: any) {
            // TODO: blech:
            let message = error.msg || "Minting failed! Please try again!";
            if (!error.msg) {
                if (error.message.indexOf("0x138")) {
                } else if (error.message.indexOf("0x137")) {
                message = `SOLD OUT!`;
                } else if (error.message.indexOf("0x135")) {
                message = `Insufficient funds to mint. Please fund your wallet.`;
                }
            } else {
                if (error.code === 311) {
                message = `SOLD OUT!`;
                setIsSoldOut(true);
                } else if (error.code === 312) {
                message = `Minting period hasn't started yet.`;
                }
            }

            setAlertState({
                open: true,
                message,
                severity: "error",
            });
        } 
        finally {
            if (wallet?.publicKey) {
                const balance = await props.connection.getBalance(wallet?.publicKey);
                setBalance(balance / LAMPORTS_PER_SOL);
            }
            setIsMinting(false);
        }
    };

    useEffect(() => {

        (async () => {
            if (!wallet || !wallet.publicKey || !wallet.signAllTransactions || !wallet.signTransaction) 
            {
                return;
            }

            
            //console.log(num);
            //console.log(props.candyMachineId);
            //console.log(props.connection);
            setNum(num+1);

            const anchorWallet = {
                publicKey: wallet.publicKey,
                signAllTransactions: wallet.signAllTransactions,
                signTransaction: wallet.signTransaction,
            } as anchor.Wallet;

            const { candyMachine, goLiveDate, itemsRemaining } =
                await getCandyMachineState(
                anchorWallet,
                props.candyMachineId,
                props.connection
                );

            setIsSoldOut(itemsRemaining === 0);
            setStartDate(goLiveDate);
            setCandyMachine(candyMachine);
            }
        )();
    }, [wallet, props.candyMachineId, props.connection]);

    return(
        <MintContainer id="mint">
            {   !isSoldOut
                ?   !wallet.connected
                    ?  <ConnectToStart>Connect your wallet to mint </ConnectToStart>
                    :   isActive
                        ? (isMinting 
                            ? (<CircularProgress />) 
                            : (<MintButton onclick={onMint}> MINT YOUR SIAMANGO </MintButton>)
                        )
                        : (<Countdown
                                date={startDate}
                                onMount={({ completed }) => completed && setIsActive(true)}
                                onComplete={() => setIsActive(true)}
                                renderer={renderCounter}
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
            <h1 style={{padding:"10px"}}>SOMETHING NEW COMING SOON</h1>
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