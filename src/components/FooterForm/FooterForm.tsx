import { useRef, useState } from "react";
import "./FooterForm.css";
import axios from "axios";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";

export default function FooterForm() {
  const [value, setValue] = useState("");
  const [formErr, setFormErr] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(false);
  const [isModalError, setIsModalError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(((?!-)[a-zA-Z\-0-9]+(?<!-)\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ) {
      setFormErr(false);
      try {
        setIsLoading(true);
        let res = await axios.post(
          "https://testprojectserver-production.up.railway.app/send-email/",
          {
            email: value,
          }
        );
        if (res.status == 200) {
          setIsLoading(false);
          setValue("");
          setIsModalSuccess(true);
        }
      } catch (err) {
        console.log(err);
        setIsModalError(true);
        setIsLoading(false);
      }
    } else {
      setFormErr(true);
    }
  };

  return (
    <>
      <form ref={form} className="footer-form">
        <div className="footer-form_container">
          <input
            name="email"
            autoComplete={"off"}
            placeholder="Enter your Email and get notified"
            className="footer-form_input"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="footer-form_btn">
            {isLoading ? (
              <div className="loader"></div>
            ) : (
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
            )}
          </button>
          {formErr && <div className="err-msg">Invalid E-mail</div>}
        </div>
      </form>
      {isModalSuccess &&
        createPortal(
          <Modal
            show={isModalSuccess}
            msgTitle={"SUCCESS!"}
            msgText={"You have successfully subscribed to the email newsletter"}
            onClose={() => setIsModalSuccess(false)}
          />,
          document.body
        )}
      {isModalError &&
        createPortal(
          <Modal
            show={isModalError}
            msgTitle={"UNSUCCESS"}
            msgText={"Try again later"}
            onClose={() => setIsModalError(false)}
            isErr={true}
          />,
          document.body
        )}
    </>
  );
}
