import { useState } from "react";
import Countdown from "react-countdown";
import { Counter, CounterContainer } from "../Mint/MintElemtes";

const CountdownSection = ()=>
{

    const [startDate, setStartDate] = useState(new Date(2022,1));
    const [isActive, setIsActive] = useState(false);

    return(
        <div style={{textAlign:"center", padding:"40px 0px"}}>
            
            <Countdown
                date={startDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
            />
        </div>
    );
}
//<h1 style={{padding:"10px", fontSize:"3em", color:"rgb(237, 108, 255)", textShadow:"rgb(159, 12, 77) 1px 2px 2px"}}>SOMETHING NEW COMING SOON</h1>
const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
    return (
        <CounterContainer>
            <Counter>
            <span></span>
                <section>
                    <p>{days}</p>
                    <p><small>DAYS</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>{hours}</p>
                    <p><small>HOURS</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>{minutes}</p>
                    <p><small>MINUTES</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>{seconds}</p>
                    <p><small>SECONDS</small></p>
                </section>
                <span></span>
            </Counter>
        </CounterContainer>
    );
  };

export default CountdownSection;