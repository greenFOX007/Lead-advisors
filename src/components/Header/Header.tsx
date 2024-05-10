import "./Header.css";
import logo from "../../assets/logo.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Header() {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".header-logo_link",
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1 }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className="header-container">
      <a href="/" className="header-logo_link">
        <img
          className="header-logo_img"
          src={logo}
          alt="logo"
          title="Lead advisors"
        />
      </a>
    </div>
  );
}
