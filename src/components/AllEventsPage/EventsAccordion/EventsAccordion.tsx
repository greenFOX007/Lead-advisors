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
      name: "Hawaiian party",
      photo: img,
    },
    {
      date: "01.02.23",
      linkUrl: "http://google.com/",
      name: "Hawaiian party",
      photo: img,
    },
    {
      date: "01.02.23",
      linkUrl: "http://google.com/",
      name: "Hawaiian party",
      photo: img,
    },
    {
      date: "01.02.23",
      linkUrl: "http://google.com/",
      name: "Hawaiian party",
      photo: img,
    },
    {
      date: "01.02.23",
      linkUrl: "http://google.com/",
      name: "Hawaiian party",
      photo: img,
    },
    {
      date: "01.02.23",
      linkUrl: "http://google.com/",
      name: "Hawaiian party",
      photo: img,
    },
    {
      date: "01.02.23",
      linkUrl: "http://google.com/",
      name: "Hawaiian party",
      photo: img,
    },
  ];

  useEffect(() => {
    document
      .querySelectorAll(".events-accordion_item__container")[0]
      .classList.add("accordion_item__content-open");
    document
      .querySelectorAll(".events-accordion_item")[0]
      .classList.add("accordion_item-open");
  });

  const handleClick = (e: React.SyntheticEvent) => {
    document
      .querySelectorAll(".events-accordion_item__container")
      .forEach((item: any) => {
        item.classList.remove("accordion_item__content-open");
      });

    document.querySelectorAll(".events-accordion_item").forEach((item): any => {
      item.classList.remove("accordion_item-open");
    });

    console.log(e.currentTarget.nextElementSibling);

    e.currentTarget
      .querySelector(".events-accordion_item__container")
      ?.classList.add("accordion_item__content-open");

    console.log(e.currentTarget.parentNode);
    e.currentTarget.classList.add("accordion_item-open");
  };

  return (
    <div className="events-accordion_container">
      {eventsList.map((item: IEventItem, intex: number): any => {
        return (
          <div className={`events-accordion_item`} onClick={handleClick}>
            <div className="events-accordion_tab">
              <div className="events-accordion_tab__name">{item.name}</div>
              <div className="events-accordion_tab__number">
                {`0${intex + 1}`}
              </div>
            </div>
            <div
              className={`events-accordion_item__container `}
              style={{
                backgroundImage: `url('${item.photo}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="events-accordion_item__content">
                <div className="events-accordion_item__digit">
                  {`0${intex + 1}`}
                </div>
                <div className="events-accordion_item__meta">
                  <h3 className="events-accordion_item__name">{item.name}</h3>
                  <div className="events-accordion_item__date">{item.date}</div>
                  <a href="#" className="events-accordion_item__link">
                    More information
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
