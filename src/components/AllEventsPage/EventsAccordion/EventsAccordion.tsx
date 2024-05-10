import { useEffect } from "react";
import "./EventsAccordion.css";
import img from "../../../assets/accordionPhoto.png";

interface IEventItem {
  name: string;
  date: string;
  linkUrl: string;
  photo: string;
}

type EventList = Array<IEventItem>;

export default function EventsAccordion() {
  const eventsList: EventList = [
    {
      date: "01.02.23",
      linkUrl: "http://google.com/",
      name: "Hawaiian party",
      photo: img,
    },
    {
      date: "01.02.23",
      linkUrl: "http://google.com/",
      name: "Мafia party",
      photo: img,
    },
    {
      date: "01.02.23",
      linkUrl: "http://google.com/",
      name: "Party",
      photo: img,
    },
    {
      date: "01.02.23",
      linkUrl: "http://google.com/",
      name: "Party on the beach",
      photo: img,
    },
    {
      date: "01.02.23",
      linkUrl: "http://google.com/",
      name: "Home Security",
      photo: img,
    },
    {
      date: "01.02.23",
      linkUrl: "http://google.com/",
      name: "Network Design & Implementation",
      photo: img,
    },
    {
      date: "01.02.23",
      linkUrl: "http://google.com/",
      name: "System Design & Engineering",
      photo: img,
    },
    {
      date: "01.02.23",
      linkUrl: "http://google.com/",
      name: "Client Care Plans",
      photo: img,
    },
  ];

  useEffect(() => {
    const accordion = document.querySelector(".accordion");
    toggleAccordion(document.querySelector(".accordion"));
    if (accordion) {
      accordion.addEventListener("click", (e) => {
        const activePanel = e.target.closest(".accordion-panel");
        if (!activePanel) return;
        toggleAccordion(activePanel);
      });
    }

    function toggleAccordion(panelToActivate: any) {
      const buttons = panelToActivate.parentElement.querySelectorAll("button");
      const contents =
        panelToActivate.parentElement.querySelectorAll(".accordion-content");

      buttons.forEach((button: any) => {
        button.setAttribute("aria-expanded", false);
      });

      contents.forEach((content: any) => {
        content.setAttribute("aria-hidden", true);
      });

      panelToActivate
        .querySelector("button")
        .setAttribute("aria-expanded", true);

      panelToActivate
        .querySelector(".accordion-content")
        .setAttribute("aria-hidden", false);
    }
  });

  return (
    <div className="accordion">
      {eventsList.map((item: IEventItem, intex: number): any => {
        return (
          <div className="accordion-panel">
            <div id="panel-heading">
              <button
                className="accordion-trigger"
                aria-controls="panel-content"
                aria-expanded="true"
              >
                {item.name}
              </button>
              <div className="accordion-number">{`0${intex + 1}`}</div>
            </div>
            <div
              className="accordion-content"
              id="panel-content"
              aria-labelledby="panel-heading"
              aria-hidden="false"
              role="region"
            >
              <div className="events-accordion_item__meta">
                <h3 className="events-accordion_item__name">{item.name}</h3>
                <div className="events-accordion_item__date">{item.date}</div>
                <a href="#" className="events-accordion_item__link">
                  More information
                </a>
              </div>
              <img
                className="accordion-image"
                src={item.photo}
                alt="A sailboat at sea during sunset"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
