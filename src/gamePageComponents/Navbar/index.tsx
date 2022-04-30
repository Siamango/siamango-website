import "./navbar.css";
import styled from "styled-components";
import { useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { WalletDialogButton, WalletDisconnectButton } from "@solana/wallet-adapter-material-ui";
import { Link , animateScroll as scroll} from "react-scroll";
import { useState, useEffect } from "react";
import * as anchor from "@project-serum/anchor";
//import pdf from '../../assets/Whitepaper.pdf';

//icon
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import logo from '../../assets/images/cloud_logo.png';

import {
  shortenAddress,
} from "../../candy-machine";

const ConnectButton = styled(WalletDialogButton)``;



export interface NavbarProps
{
  connection?: anchor.web3.Connection;
}

const Navbar = (props: NavbarProps) => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [balance, setBalance] = useState<number>();
    const wallet = useWallet();
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => 
    {
      setClick(false);
      scroll.scrollToTop();
    }

    const closeMobileMenuItem = () => 
    {
      setClick(false);
    }
  
    const showButton = () => {
      if (window.innerWidth <= 1330) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);

    useEffect(() => {
      (async () => {
        if (wallet?.publicKey && props.connection) {
          const balance = await props.connection.getBalance(wallet.publicKey);
          setBalance(balance / LAMPORTS_PER_SOL);
        }
      })();
        
    }, [wallet.publicKey, props.connection]);

  
    window.addEventListener('resize', showButton);
  
    return (
      
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='home' className='navbar-logo' onClick={closeMobileMenu}>
              <img src={logo} alt="NEON CLOUDS" style={{width:"150px"}}/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='menuContainer' className='nav-links' onClick={closeMobileMenuItem}
                      smooth={true} duration={500} spy={true} offset={-200}>
                      Utilities
                    </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='game'
                    className='nav-links'
                    onClick={closeMobileMenuItem}
                    smooth={true} duration={500} spy={true} offset={-80}
                  >
                    Game
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='roadmap'
                    className='nav-links'
                    onClick={closeMobileMenuItem}
                    smooth={true} duration={500} spy={true} offset={-80}
                  >
                    Roadmap
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='team'
                    className='nav-links'
                    onClick={closeMobileMenuItem}
                    smooth={true} duration={500} spy={true} offset={-80}
                  >
                    Team
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='faqs'
                    className='nav-links'
                    onClick={closeMobileMenuItem}
                    smooth={true} duration={500} spy={true} offset={-80}
                  >
                    FAQs
                  </Link>
                </li>
                <li className='nav-item'>
                  <a
                    href="../assets/Whitepaper.pdf"
                    download
                    className='nav-links'
                    onClick={closeMobileMenuItem}
                  >
                    Whitepapaer
                  </a>
                </li>
                
              </ul>
              
            {button?
              <ul className={click ? 'nav-menu active' : 'nav-menu'} style={{width:"fit-content", justifyContent: "end"}}>
                <li className='nav-item'>
                  <a 
                    className="nav-links"
                    style={{textDecoration: "none"}}
                    href='https://twitter.com/NeonCloudsNFT'
                    target='_blank'
                    rel="noreferrer"
                    aria-label='Twitter'
                  >
                    <i className='fab fa-twitter' />
                  </a>
                </li>

                <li className='nav-item'>
                  <a 
                    className="nav-links"
                    style={{textDecoration: "none"}}
                    href='https://instagram.com/NeonCloudsNFT'
                    target='_blank'
                    rel="noreferrer"
                    aria-label='Instagram'
                  >
                    <i className='fab fa-instagram' />
                  </a>
                </li>

                <li className='nav-item'>
                  <a 
                    className="nav-links"
                    href='https://github.com/'
                    target='_blank'
                    rel="noreferrer"
                    aria-label='GitHub'
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>

                <li className='nav-item'>
                  <a
                    className="nav-links"
                    href='https://discord.gg/P8hc8npWRt'
                    target='_blank'
                    rel="noreferrer"
                    aria-label='Discord'
                  >
                    <i className="fab fa-discord"></i>
                  </a>
                </li>
              </ul>
              : props.connection
                ? ""
                : <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                      <a 
                        className="nav-links"
                        style={{textDecoration: "none"}}
                        href='https://twitter.com/NeonCloudsNFT'
                        target='_blank'
                        rel="noreferrer"
                        aria-label='Twitter'
                      >
                        <i className='fab fa-twitter' />
                      </a>
                    </li>

                    <li className='nav-item'>
                      <a 
                        className="nav-links"
                        style={{textDecoration: "none"}}
                        href='https://instagram.com/NeonCloudsNFT'
                        target='_blank'
                        rel="noreferrer"
                        aria-label='Instagram'
                      >
                        <i className='fab fa-instagram' />
                      </a>
                    </li>

                    <li className='nav-item'>
                      <a 
                        className="nav-links"
                        href='https://github.com/'
                        target='_blank'
                        rel="noreferrer"
                        aria-label='GitHub'
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>

                    <li className='nav-item'>
                      <a
                        className="nav-links"
                        href='https://discord.gg/P8hc8npWRt'
                        target='_blank'
                        rel="noreferrer"
                        aria-label='Discord'
                      >
                        <i className="fab fa-discord"></i>
                      </a>
                    </li>
                  </ul>

            }
            { button
              ? !wallet.connected
                ? <ConnectButton style={{width:"195px",minWidth:"unset", whiteSpace:"nowrap", border: "2px solid #cd3594", backgroundColor: "rgba(0,0,0,0.5)", marginRight:"10px"}}>Connect Wallet</ConnectButton>
                : <div className="dropdown">
                      <button className="walletLink">
                        <AccountBalanceWalletOutlinedIcon style={{marginRight:"10px", marginBottom: "-5px"}} />
                        {(shortenAddress(wallet.publicKey?.toBase58() || ""))}
                      </button>
                      
                    <div className="dropdown-menu">
                      <div style={{width:"100%", textAlign:"center"}}>Balance: {balance} SOL</div>
                      <div style={{width:"100%",height:"1px", backgroundColor:"white", marginBottom:"5px", marginTop:"5px" }}/>
                      <WalletDisconnectButton style={{backgroundColor:"#fd5252", boxShadow:"none"}}/>
                    </div>
                  </div>
              : ""
            }
          </div>
        </nav>
      
    );
  }
  
  export default Navbar;