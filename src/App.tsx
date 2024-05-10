import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AllEventsPage from "./components/AllEventsPage/AllEventsPage";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

function App() {
  const container = useRef<HTMLDivElement | null>(null);
  const eventsBlock = useRef<HTMLDivElement | null>(null);
  const [isEventsBlockVisible, setIsEventsBlockVisible] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        ".left-background_item",
        { x: "-100%", y: "-100%" },
        { x: 0, y: 0 }
      );
      gsap.fromTo(
        ".right-background_item",
        { x: "100%", y: "-100%" },
        { x: 0, y: 0, delay: 0.2 }
      );
    },
    { scope: container }
  );

  const scrollToYourBlock = async () => {
    await setIsEventsBlockVisible(true);
    await gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: eventsBlock.current?.offsetTop,
        autoKill: false,
      },
    });
  };

  return (
    <div ref={container} className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Hero />
        <Footer eventsHandler={scrollToYourBlock} />
      </div>
      {isEventsBlockVisible && (
        <div ref={eventsBlock}>
          <AllEventsPage />
        </div>
      )}

      <div className="background_item left-background_item">
        <svg
          className="left-background_item_svg"
          viewBox="0 0 470 419"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_1_28)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.4328 410.107C147.67 380.657 62.1031 303.502 98.4759 255.414C142.66 197 491.186 123.286 468.434 26.699C399.956 -127.104 194.156 -34.0396 142.454 -89.585C92.3313 -143.434 4.42358 -227.864 -63.8169 -255.388C-129.136 -281.733 -269.011 -281.089 -290.833 -154.314C-304.75 -58.9551 -261.367 -35.6642 -292.329 13.0606C-325.114 64.6532 -376.659 107.424 -381.099 168.374C-385.91 234.428 -366.845 307.689 -316.965 351.255C-268.416 393.657 -195.189 375.935 -131.554 386.326C-72.0016 396.051 -11.5614 434.965 43.4328 410.107Z"
              fill="#162C4E"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_1_28"
              x="-381.819"
              y="-269.155"
              width="851.319"
              height="691.427"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_28"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="background_item right-background_item">
        <svg
          className="right-background_item_svg"
          viewBox="0 0 271 327"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_1_29)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M692.596 68.3349C731.063 -32.9233 618.057 -10.1912 601.095 -68.0588C580.49 -138.353 729.002 -462.166 637.823 -501.457C473.409 -538.128 425.523 -317.399 350.068 -308.983C276.918 -300.824 156.67 -280.547 93.8751 -242.151C33.7688 -205.398 -49.0901 -92.6886 39.779 0.3896C108.113 68.3963 152.69 47.4384 173.389 101.341C195.307 158.416 198.952 225.298 245.285 265.188C295.498 308.417 365.735 336.769 430.477 322.676C493.491 308.959 522.898 239.593 569.18 194.684C612.493 152.657 679.791 127.312 692.596 68.3349Z"
              fill="#162C4E"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_1_29"
              x="0.838177"
              y="-505.564"
              width="699.692"
              height="835.887"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1_29"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default App;
