import { PlayerLeft, PlayerRight, PlayerContainer, PlayerContent } from "./PlayerElements";
import player from "../../assets/images/game/idle.gif";
const PlayerSection = () =>
{
    return (
        <div style={{height:"600px", overflow:"hidden"}}>
            <PlayerContainer>
                <PlayerLeft>
                    <img src={player} style={{filter: "drop-shadow(-2px 2px 10px #fff)"}}/>
                </PlayerLeft>
                <PlayerContent>
                    <h1>1 VS 1</h1>
                </PlayerContent>
                <PlayerRight>
                    <img src={player} style={{transform:"scaleX(-1)", filter: "drop-shadow(-5px 5px 10px #000)"}}/>
                </PlayerRight>
            </PlayerContainer>
        </div>
    );
}

export default PlayerSection;