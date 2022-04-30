import { CandyMachineAccount } from '../../candy-machine';
import { GatewayStatus, useGateway } from '@civic/solana-gateway-react';
import { useEffect, useState, useRef } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  findGatewayToken,
  getGatewayTokenAddressForOwnerAndGatekeeperNetwork,
  onGatewayTokenChange,
  removeAccountChangeListener,
} from '@identity.com/solana-gateway-ts';
import { MyMintButton } from './MintElemtes';

export const MintButton = ({onMint,candyMachine,isMinting,setIsMinting,isActive}: {
  onMint: () => Promise<void>;
  candyMachine?: CandyMachineAccount;
  isMinting: boolean;
  setIsMinting: (val: boolean) => void;
  isActive: boolean;
}) => {
  const wallet = useWallet();
  const connection = useConnection();
  const [verified, setVerified] = useState(false);
  const { requestGatewayToken, gatewayStatus } = useGateway();
  const [webSocketSubscriptionId, setWebSocketSubscriptionId] = useState(-1);
  const [clicked, setClicked] = useState(false);
  const previousGatewayStatus = usePrevious(gatewayStatus);

  useEffect(() => {
    const mint = async () => 
    {
      await removeAccountChangeListener(connection.connection,webSocketSubscriptionId);
      await onMint();

      setClicked(false);
      setVerified(false);
    };

    if (verified && clicked) 
    {
      mint();
    }
  }, [verified, clicked, connection.connection, onMint, webSocketSubscriptionId]);


  useEffect(() => {
    const fromStates = [GatewayStatus.NOT_REQUESTED,GatewayStatus.REFRESH_TOKEN_REQUIRED];
    const invalidToStates = [...fromStates, GatewayStatus.UNKNOWN];
    if (fromStates.find(state => previousGatewayStatus === state) && !invalidToStates.find(state => gatewayStatus === state)) 
    {
      setIsMinting(true);
    }
    console.log('change: ', gatewayStatus);
  }, [setIsMinting, previousGatewayStatus, gatewayStatus]);

  return (
      <MyMintButton
        onClick={async () => {
          if (candyMachine?.state.isActive && candyMachine?.state.gatekeeper) 
          {
            const network = candyMachine.state.gatekeeper.gatekeeperNetwork.toBase58();
            if (network === 'ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6') 
            {
              if (gatewayStatus === GatewayStatus.ACTIVE) 
              {
                await onMint();
              } 
              else 
              {
                // setIsMinting(true);
                await requestGatewayToken();
                console.log('after: ', gatewayStatus);
              }
            } 
            else if ( network === 'ttib7tuX8PTWPqFsmUFQTj78MbRhUmqxidJRDv4hRRE' || network === 'tibePmPaoTgrs929rWpu755EXaxC7M3SthVCf6GzjZt') 
            {
              setClicked(true);
              const gatewayToken = await findGatewayToken(
                connection.connection,
                wallet.publicKey!,
                candyMachine.state.gatekeeper.gatekeeperNetwork,
              );

              if (gatewayToken?.isValid()) 
              {
                await onMint();
              } 
              else 
              {
                window.open(`https://verify.encore.fans/?gkNetwork=${network}`, '_blank');

                const gatewayTokenAddress =
                  await getGatewayTokenAddressForOwnerAndGatekeeperNetwork(
                    wallet.publicKey!,
                    candyMachine.state.gatekeeper.gatekeeperNetwork,
                  );

                setWebSocketSubscriptionId(
                  onGatewayTokenChange(
                    connection.connection,
                    gatewayTokenAddress,
                    () => setVerified(true),
                    'confirmed',
                  ),
                );
              }
            } 
            else 
            {
              setClicked(false);
              throw new Error(`Unknown Gatekeeper Network: ${network}`);
            }
          } 
          else 
          {
            await onMint();
            setClicked(false);
          }
        }}
        //variant="contained"
      >
        Mint Your Cloudy
      </MyMintButton>
  );
};

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
