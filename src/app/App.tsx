import "./App.css";
import {  useMemo } from "react";
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";


import Home from "../pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Reward from "../pages/Collective";
import Page404 from "../pages/404";
/*
const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);
*/
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);
/*
const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)
*/
const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);
  const wallets = useMemo(() => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],[]);

    return (
      <div className="App">
        <Router>
          <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
              <WalletDialogProvider>
                <Switch>
                  {window.location.host.split('.')[0] == 'collective'?
                    <Route path="/">
                      <Reward connection={connection}/>
                    </Route>
                  : ""
                  }
                  <Route exact path="/">
                    <Home connection={connection}/>
                  </Route>
                  <Route path="/">
                    <Page404/>
                  </Route>
                </Switch>
              </WalletDialogProvider>
            </WalletProvider>
          </ConnectionProvider>
        </Router>
      </div>
    );
  
};

export default App;

  /*<Route path="/mint">
      <MintPage 
        candyMachineId={candyMachineId}
        config={config}
        connection={connection} 
        startDate= {startDateSeed} 
        treasury={treasury}
        txTimeout={txTimeout}/>
    </Route>*/