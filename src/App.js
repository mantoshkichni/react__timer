import { useState } from "react";
import "./styles.scss";
var timerID;
export default function App() {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(true);
  const [time, setTime] = useState(0);

  const handleTimer = () => {
    setStart(!start);
    setReset(!reset);
    timerID = setInterval(() => {
      setTimer((timer) => timer + 10);
    }, 10);
  };
  const pauseTImer = () => {
    clearInterval(timerID);
    setStart(!start);
  };
  const resetTimer = () => {
    if (start) setStart(!start);
    if (!reset) setReset(!reset);
    clearInterval(timerID);
    setTime(timer);
    setTimer(0);
  };
  const recordTime = () => {
    setTime(timer);
  };
  return (
    <div className="App">
      <div className="timer_div">
        <div className="botton_area">
          {/* {start ? (
            <button onClick={handleTimer}>Start</button>
          ) : (
            <div>
              <button onClick={pauseTImer}>Pause</button>
              <button onClick={resetTimer} className="reset">
                Reset
              </button>
            </div>
          )} */}

          <button disabled={start} onClick={handleTimer}>
            Start
          </button>
          <button disabled={!start} onClick={pauseTImer}>
            Pause
          </button>
          <button disabled={reset} onClick={resetTimer} className="reset">
            Reset
          </button>
        </div>
        <div className="timer">
          <span className="digits">
            {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
          </span>
          <span className="digits">
            {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:
          </span>
          <span className="digits mili-sec">
            {("0" + ((timer / 10) % 100)).slice(-2)}
          </span>
          <br />
          <button onClick={recordTime}>Record</button>
        </div>
        <div className="history">
          <div className="timer">
            <span className="digits">
              {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
              {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
            </span>
            <span className="digits mili-sec">
              {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
