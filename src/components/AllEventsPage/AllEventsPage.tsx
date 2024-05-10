import "./AllEventsPage.css";
import EventsAccordion from "./EventsAccordion/EventsAccordion";

export default function AllEventsPage() {
  return (
    <div className="all-events_container">
      <h2 className="all-events_title">ALL EVENTS</h2>
      <EventsAccordion />
    </div>
  );
}
