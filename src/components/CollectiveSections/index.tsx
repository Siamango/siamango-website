import img from "../../assets/images/AnimatedCloud.gif";
import {
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "../InfoSection/InfoElements";
import styled from "styled-components/macro";

const TopLine2 = styled.p`
  color: #ee6fff; //#009fff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  //text-transform: uppercase;
  margin-bottom: 16px;
  /*text-shadow: 0em 0em 0.1em #009fff;*/
`;

const CollectiveSection = () => {
  return (
    <>
      <InfoContainer id="cloud" lightBg={false}>
        <InfoWrapper>
          <InfoRow imgStart={true}>
            <Column1 id="cloud">
              <TextWrapper style={{ fontSize: "1.2rem" }}>
                <TopLine>The Cloud</TopLine>
                <Heading lightText={true}>What is this strange cloud?</Heading>
                <Subtitle darkText={false}>
                  An ominous Neon Cloud hangs over Suncity. All the Cloudies are
                  afraid of this cloud as sometimes it sends out lightning,
                  zapping innocent members, making them disappear without
                  leaving any trace behind.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2 id="cloud">
              <ImgWrap>
                <Img src={img} alt="ART IMAGE" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer id="cloud2" lightBg={false}>
        <InfoWrapper>
          <InfoRow
            imgStart={false}
            style={{ alignItems: "start", borderBottom: "2px solid #fff" }}
          >
            <Column1 id="cloud2">
              <TextWrapper style={{ fontSize: "1.2rem" }}>
                <Heading lightText={true}>How does it work?</Heading>
                <TopLine2>First gen</TopLine2>
                <Subtitle darkText={false} style={{ textAlign: "justify" }}>
                  The Cloud is charged by a portion of the minting revenue and{" "}
                  <span style={{ color: "#009fff" }}>60%</span> of the secondary
                  market fees. The Cloud will periodically zap Cloudies and buy
                  them off the floor of secondary marketplaces, burning them and
                  reducing the supply.
                  <br />
                  <br />
                  <TopLine2>Next Gen</TopLine2>
                  After a sufficient number of Cloudies have been zapped, they
                  will return as a different version of their former self, The
                  Cloud will have permanently glitched them beyond the point of
                  no return. They will be called next-gen Cloudies. Next-gen
                  Cloudies will supercharge the cloud! A high percentage of
                  next-gen minting and secondary market fees will go directly
                  into The Cloud charging it even faster and in turn zapping
                  more Cloudies that will become part of the next generation
                  creating a loop
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2 id="cloud">
              <TextWrapper style={{ fontSize: "1.2rem" }}>
                <Heading lightText={true}>
                  <br />
                </Heading>
                <Subtitle darkText={false} style={{ textAlign: "justify" }}>
                  that will zap and create next-gen Cloudies faster and faster.
                  This will reduce the original supply without inflating the
                  overall collection, rewarding holders while at the same time
                  creating an opportunity for new members to join the collective
                  with new glitched art!
                  <br />
                  <br />
                  <TopLine2>Next Gen DAO</TopLine2>
                  After a significant number of next-gen Cloudies have been
                  minted, members of the community will have the opportunity to
                  vote through the NeonCloudsDAO on how to use the revenue
                  collected by The Cloud. Giving them the opportunity to decide
                  between different activities such as airdropping the revenue to
                  the holders or keep sweeping the floor.
                </Subtitle>
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default CollectiveSection;
