import GlitchText from "../../components/Glitch";
import { BetaContainer, DownloadButton } from "./BetaSectionElements";

const BetaSection = () =>
{
    return (
        <BetaContainer>
            <GlitchText fontSize={"5em"}>Join the fight!</GlitchText>
            <h2>Download now the open beta of the game.</h2>
            <DownloadButton/>
        </BetaContainer>
    );
}

export default BetaSection;