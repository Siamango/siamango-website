import { FaqContainer, Faq, Question, Section, Answer } from "./FaqElements";

const GameFaqSection = () => {
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
            <h3> What platform is game build?</h3>
            <i
              className="fas fa-sort-down"
              id="answer1_Icon"
              style={{ transition: "transform 0.2s ease-in" }}
            ></i>
          </Question>
          <Answer id="answer1" style={{ maxHeight: "0px" }}>
            <p>
              Pc (OS: Windows and Linux)
            </p>
          </Answer>
        </Faq>
        <Faq onClick={() => handleClick("answer2")}>
          <Question>
            <h3> What will be the price of the game?</h3>
            <i
              className="fas fa-sort-down"
              id="answer2_Icon"
              style={{ transition: "transform 0.2s ease-in" }}
            ></i>
          </Question>
          <Answer id="answer2" style={{ maxHeight: "0px" }}>
            <p>
              0! The game is free to download, but you have to pay $CLOUD to start the match.
            </p>
          </Answer>
        </Faq>
        <Faq onClick={() => handleClick("answer3")}>
          <Question>
            <h3>How much are the abilities?</h3>
            <i
              className="fas fa-sort-down"
              id="answer3_Icon"
              style={{ transition: "transform 0.2s ease-in" }}
            ></i>
          </Question>
          <Answer id="answer3" style={{ maxHeight: "0px" }}>
            <p>
              The ability are continuously updated. 
            </p>
          </Answer>
        </Faq>
      </Section>
    </FaqContainer>
  );
};

export default GameFaqSection;
