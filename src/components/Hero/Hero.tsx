import HeroButton from "../HeroButton/HeroButton";
import { Timer } from "../Timer/Timer";
import "./Hero.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Hero() {
  const endTime = "2024-07-24T23:59:59";
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-text_title",
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1, delay: 0 }
      );

      gsap.fromTo(
        ".hero-text_description",
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1, delay: 0.5 }
      );

      gsap.fromTo(
        ".timer-container",
        { y: "-20%", opacity: 0 },
        { y: 0, opacity: 1, delay: 1 }
      );

      gsap.fromTo(
        ".hero-btn-group",
        { y: "-10%", opacity: 0 },
        { y: 0, opacity: 1, delay: 1.5 }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className="hero">
      <div className="hero-text_container">
        <h1 className="hero-text_title">Under Construction</h1>
        <p className="hero-text_description">
          We're making lots of improvements and will be back soon
        </p>
      </div>
      <div className="timer-container">
        <Timer endTime={endTime} />
      </div>
      <div className="hero-btn-group">
        <div className="hero-btn-group_text">
          Check our event page when you wait:
        </div>
        <HeroButton href={"https://www.google.com/"} text={"Go to the event"} />
      </div>
    </div>
  );
}
