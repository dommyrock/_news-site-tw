import { useState, useRef, useEffect } from "react";
import TimelineContent from "./TimelineContent";
const timestampData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let scrollLeft;
let start_x;

const VerticalTimeline = () => {
  const [left, setLeft] = useState(0);
  const [isdown, setDown] = useState(false);
  const timelineRef = useRef(null);

  const handleMouseMove = (e) => {
    let x = e.clientX;
    setLeft(x);
    if (!isdown) return; //stop fn from running
    e.preventDefault();
    const xpos = x - timelineRef.current.offsetLeft;
    const walk = xpos - start_x;
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUp = (e) => {
    setDown(false);
  };
  const handleMouseLeave = (e) => {
    setDown(false);
  };
  const handleMouseDown = (e) => {
    setDown(true);
    start_x = e.clientX - timelineRef.current.offsetLeft;
    scrollLeft = timelineRef.current.scrollLeft;
  };
  const handleBack = (e) => {
    timelineRef.current.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };
  const handleTimelineItemClick = (e) => {
    console.log(e.target);
  };

  const styles = {
    "--leftOffset": left + "px",
  };
  // Fove frost tol left because it makes ul items unhoverable
  const frostStyle = {
    "--leftOffset": left - 20 + "px",
  };

  return (
    <>
      <button className="border-2 border-blue-400 border-opacity-50" onClick={(e) => handleBack(e)}>
        back
      </button>
      <p>2020</p>
      <div
        id="timeline-container"
        className="horiz-timeline"
        ref={timelineRef}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={(e) => handleMouseUp(e)}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <div>
          {/* <div style={{ display: "inherit", width: "var(--leftOffset)" }}> */}
          <ul style={styles}>
            {timestampData?.map((timestamp) => (
              <li id={timestamp} key={timestamp} onClick={(e) => handleTimelineItemClick(e)}>
                <p>{timestamp}</p>
              </li>
            ))}
          </ul>
          {/* </div> */}
        </div>
        <TimelineContent />
        <div className="frost-backdrop-filter" style={frostStyle}></div>
      </div>
    </>
  );
};
//TODO :ad SSR fetch by next here  (Server side props to fetch initial data on server before render)

export default VerticalTimeline;
//dont forget this for current process /launch/build status https://codepen.io/roppazvan/pen/axgoYR
