
import img1 from "../../assets/images/Cloudies8.gif";
import img2 from "../../assets/images/Cloudies7.gif";
import img3 from "../../assets/images/NeonCloudsRadRugsCertificate.png";
import box from "../../assets/images/info/box.png";
import rewards from "../../assets/images/info/rewards.png";
import wallet from "../../assets/images/info/wallet.png";
import clouds from "../../assets/images/AnimatedCloud.gif";

export const projectData = 
{
    id:"project",
    lightBg: true,
    lightText: false,
    lighTextDesc: false,
    topLine: "The Project",
    headline: "The Neon Clouds NFTs",
    subtitle: ["The Neon Clouds Collective is a deflationary, generative collection of 1569 NFTs on the Solana blockchain.",
               "The main focus of the Neon Cloud Collective is to establish the chillest community on Solana where artists, creators and all kinds of people have a platform where they can express and discuss their art and ideas."],
    buttonLabel: "Take a look",
    to: "gallery",
    imgStart: false,
    img: img1,
    alt: "ART",
    dark: false,
    primary: false,
    darkText: true
}

export const mintData = 
{
    id:"collection",
    lightBg: false,
    lightText: true,
    lighTextDesc: true,
    topLine: "The Collection",
    headline: "Ready to get yours?",
    subtitle: "Plus 60% of collection sold!!!",
    buttonLabel: "Go to mint",
    to: "mint",
    imgStart: true,
    img: img2,
    alt: "ART",
    dark: true,
    primary: true,
    darkText: false
}

export const teamData = 
{
    id:"team",
    lightBg: true,
    lightText: false,
    lighTextDesc: false,
    topLine: "Our Team",
    headline: "Who we are",
    subtitle: "We are group of friends passionate about crypto, art and NFTs, with the goal of creating the chillest NFT comunity on the Solana blockchain.",
    buttonLabel: "Git Hub",
    to: "home",
    imgStart: false,
    img: img3,
    alt: "ART",
    dark: false,
    primary: false,
    darkText: true
}

export const rarityData = 
{
    id:"rarity",
    lightBg: true,
    lightText: false,
    lighTextDesc: false,
    topLine: "Hou rare is your Cloudy?",
    headline: "Check rarity",
    subtitle: "Check rarity of your Cloudy, and watch all the items that he has",
    buttonLabel: "Rarity Page",
    to: "/rarity",
    imgStart: false,
    img: img2,
    alt: "ART",
    dark: true,
    primary: false,
    darkText: true
}

export const passiveIncomeData= 
{
    id:"passiveIncome",
    lightBg: true,
    lightText: false,
    lighTextDesc: false,
    imgStart: false,
    img: rewards,
    alt: "ART",
    dark: true,
    darkText: true
}

export const DAOgameData= 
{
    id:"game",
    lightBg: false,
    lightText: true,
    lighTextDesc: false,
    imgStart: true,
    img: box,
    alt: "ART",
    dark: false,
    darkText: false
}
export const fundInvestmentData= 
{
    id:"investments",
    lightBg: true,
    lightText: false,
    lighTextDesc: false,
    imgStart: true,
    img: wallet,
    alt: "ART",
    dark: false,
    darkText: true
}
export const deflationaryMechanismData= 
{
    id:"cloud",
    lightBg: false,
    lightText: true,
    lighTextDesc: true,
    imgStart: false,
    img: clouds,
    alt: "ART",
    dark: false,
    darkText: false
}