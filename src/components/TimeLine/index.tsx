import timelineElements from "./timelineElements";
import "./style.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const TimeLine = () =>
{
    return(
      <div id="roadmap" className="roadmap" >
        <h1 className="title" >This is our plan.</h1>
        <VerticalTimeline>
          {timelineElements.map((element) => {
  
            return (
              <VerticalTimelineElement
                key={element.id}
                iconStyle={{background: element.done?"#009fff":"#9e9e9e",borderRadius: "50%",}}
                contentStyle={{background:"#ffffffb9"}}
                
              >
                <h2 className="vertical-timeline-element-title" style={{color:"#000", position:"relative", zIndex:10}}>
                  {element.title}
                </h2>
                <h3 style={{ position:"relative", zIndex:10, color:"#d835f5"}}>{element.date}</h3>
                
                  <ul>
                    {element.description.map((e)=>{
                      return(<li id="description">{e} </li>);
                    })}
                  </ul>
                
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
        <h1 className="end" >The best is yet to come, chill out...</h1>
        
      </div>
    );
}
export default TimeLine;
