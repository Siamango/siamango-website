import { FaqContainer, Faq, Question, Section, Answer } from "./FaqElements";

const FaqSection = () => {
  const handleClick = (num: any) => {
    console.log(num + " press");
    let elem = document.getElementById(num)!;
    let icon = document.getElementById(num + "_Icon")!;
    if (elem.style.maxHeight === "0px") {
      console.log("modify 1 ");
      elem.style.maxHeight = "600px";
      icon.style.transform = "rotate(180deg)";
    } else {
      console.log("modify 2");
      elem.style.maxHeight = "0px";
      icon.style.transform = "rotate(0deg)";
    }
  };

  return (
    <FaqContainer id="faqs">
      <Section>
        <h1>FAQs</h1>
        <Faq onClick={() => handleClick("answer1")}>
          <Question>
            <h3> How many Cloudies are there?</h3>
            <i
              className="fas fa-sort-down"
              id="answer1_Icon"
              style={{ transition: "transform 0.2s ease-in" }}
            ></i>
          </Question>
          <Answer id="answer1" style={{ maxHeight: "0px" }}>
            <p>
              There will be 1250 Cloudies. After minting, The Cloud will begin
              its zapping process.
            </p>
          </Answer>
        </Faq>
        <Faq onClick={() => handleClick("answer2")}>
          <Question>
            <h3> How does The Cloud work?</h3>
            <i
              className="fas fa-sort-down"
              id="answer2_Icon"
              style={{ transition: "transform 0.2s ease-in" }}
            ></i>
          </Question>
          <Answer id="answer2" style={{ maxHeight: "0px" }}>
            <p>
              Periodically, we will head over to verified marketplaces and buy
              the cheapest Neon Cloud available using The Cloud wallet account.
              <br />
              Every zapped Neon Cloud will get taken out of circulation, until
              next gen update that will make them able to be minted again, but
              they won't look like what they used to...
            </p>
          </Answer>
        </Faq>
        <Faq onClick={() => handleClick("answer3")}>
          <Question>
            <h3>How much are the Sales Royalties?</h3>
            <i
              className="fas fa-sort-down"
              id="answer3_Icon"
              style={{ transition: "transform 0.2s ease-in" }}
            ></i>
          </Question>
          <Answer id="answer3" style={{ maxHeight: "0px" }}>
            <p>
              Every Cloudy traded on the open market is subject to a 7% royalty,
              which is divided as follows:
              <ul style={{ marginLeft: "20px" }}>
                <li>3% to the team</li>
                <li>4% to the Cloud</li>
              </ul>
            </p>
          </Answer>
        </Faq>
        <Faq onClick={() => handleClick("answer4")}>
          <Question>
            <h3>What will be the minting price for the Cloudies Collective?</h3>
            <i
              className="fas fa-sort-down"
              id="answer4_Icon"
              style={{ transition: "transform 0.2s ease-in" }}
            ></i>
          </Question>
          <Answer id="answer4" style={{ maxHeight: "0px" }}>
            <p>Minting price per Cloudy will be 0.42 SOL.</p>
          </Answer>
        </Faq>
        <Faq onClick={() => handleClick("answer5")}>
          <Question>
            <h3>When and where is the launch?</h3>
            <i
              className="fas fa-sort-down"
              id="answer5_Icon"
              style={{ transition: "transform 0.2s ease-in" }}
            ></i>
          </Question>
          <Answer id="answer5" style={{ maxHeight: "0px" }}>
            <p>
              Public sale will be exclusively on our website, February 1st 2022.
            </p>
          </Answer>
        </Faq>
        <Faq onClick={() => handleClick("answer6")}>
          <Question>
            <h3>How can I mint and how many Cloudies can I mint?</h3>
            <i
              className="fas fa-sort-down"
              id="answer6_Icon"
              style={{ transition: "transform 0.2s ease-in" }}
            ></i>
          </Question>
          <Answer id="answer6" style={{ maxHeight: "0px" }}>
            <p>
              You can mint using Solana’s main wallets: Phantom, Sollet and
              Solflare on our website. You will be able to mint as many as you
              can, until we go sold out.
            </p>
          </Answer>
        </Faq>
        <Faq onClick={() => handleClick("answer7")}>
          <Question>
            <h3>Where can I sell my Neon Cloud?</h3>
            <i
              className="fas fa-sort-down"
              id="answer7_Icon"
              style={{ transition: "transform 0.2s ease-in" }}
            ></i>
          </Question>
          <Answer id="answer7" style={{ maxHeight: "0px" }}>
            <p>
              You will be able to list your Neon Cloud on the main Solana NFTs
              secondary markets.
            </p>
          </Answer>
        </Faq>
      </Section>
    </FaqContainer>
  );
};

export default FaqSection;
