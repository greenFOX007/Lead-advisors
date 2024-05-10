import FooterForm from "../FooterForm/FooterForm";
import "./Footer.css";

export default function Footer({
  eventsHandler,
}: {
  eventsHandler: () => void;
}) {
  return (
    <div className="footer">
      <FooterForm />
      <div onClick={eventsHandler} className="other-events-btn">
        <div className="other-events-btn_text">Other Events</div>
        <div className="other-events-btn_arrow">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 12L12 19L5 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
