import "./HeroButton.css";

interface IHeroButton {
  text: string;
  href: string;
}

export default function HeroButton({ text, href }: IHeroButton) {
  return (
    <a href={href} rel="noreferrer" target="_blank" className="hero-btn">
      <span className="hero-btn_text">{text}</span>
      <div className="hero-btn_arrow">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16669 10H15.8334"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 4.16666L15.8333 9.99999L10 15.8333"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
}
