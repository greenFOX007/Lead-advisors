import { useState, useEffect } from "react";
import "./Timer.css";
import { calculateTimeLeft } from "../../utils/calculateTimeLeft";
import { formatTime } from "../../utils/formatTime";

interface ITimer {
  endTime: string;
}

interface ILeftTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Timer = ({ endTime }: ITimer) => {
  const [timeLeft, setTimeLeft] = useState<ILeftTime>(
    calculateTimeLeft(endTime)
  );

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="timer">
      <div className="timer_container">
        <div className="timer-digit">
          <div className="digit">{formatTime(timeLeft.days)}</div>
          <div className="timer-label">
            {windowSize <= 1024 ? "DD" : "Days"}
          </div>
        </div>
        <div className="digit-separator">:</div>
        <div className="timer-digit">
          <div className="digit">{formatTime(timeLeft.hours)}</div>
          <div className="timer-label">
            {windowSize <= 1024 ? "HH" : "Hours"}
          </div>
        </div>
        <div className="digit-separator">:</div>
        <div className="timer-digit">
          <div className="digit">{formatTime(timeLeft.minutes)}</div>
          <div className="timer-label">
            {windowSize <= 1024 ? "MM" : "Minutes"}
          </div>
        </div>
        <div className="digit-separator">:</div>
        <div className="timer-digit">
          <div className="digit">{formatTime(timeLeft.seconds)}</div>
          <div className="timer-label">
            {" "}
            {windowSize <= 1024 ? "SS" : "Seconds"}
          </div>
        </div>
      </div>
    </div>
  );
};
