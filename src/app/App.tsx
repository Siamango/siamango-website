import "./App.css";
import {  useMemo } from "react";
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { getPhantomWallet, getSolflareWallet, getSolletWallet} from "@solana/wallet-adapter-wallets";
import { ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Page404 from "../pages/404";
import StakingPage from "../pages/staking";
import GamePage from "../pages/Game";

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const txTimeout = 60000; // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);
  const wallets = useMemo(() => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],[]);

    return (
      <div className="App">
        <Router>
          <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
              <WalletDialogProvider>
                <Routes>
                  {
                    window.location.host.split('.')[0] === 'game'
                    ? <Route path="/" element={<GamePage />}/>
                    : ""
                  }
                  {
                    window.location.host.split('.')[0] === 'staking'?
                    <Route path="/" element={<StakingPage connection={connection}/>}/>
                    
                    : ""
                  }
                  <Route path="/" element={ <Home connection={connection}/>}/>
                  <Route
                    path="*"
                    element={<Page404/>}
                  />
                </Routes>
              </WalletDialogProvider>
            </WalletProvider>
          </ConnectionProvider>
        </Router>
      </div>
    );
  
};

export default App;

  /*
 {
                    window.location.host.split('.')[0] === 'game'
                    ? <Route path="/" element={<GamePage />}/>
                    : ""
                  }
                  {
                    window.location.host.split('.')[0] === 'staking'?
                    <Route path="/" element={<StakingPage connection={connection}/>}/>
                    
                    : ""
                  }
  
  <Route exact path="/mint">
                    <MintPage 
                      candyMachineId={candyMachineId}
                      connection={connection}
                      txTimeout={txTimeout}
                      rpcHost={rpcHost}/>
                  </Route>*/