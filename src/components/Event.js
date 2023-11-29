import { useState } from "react";

const Event = ({ event }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const startDate = event.created;
  const date = new Date(startDate);
  const presentationDate = date.toLocaleString(undefined, { year: "numeric", month: "long", day: "numeric" });
  
  return (
    <li className="event">
      <div className="event-title">{event.summary}</div>
      <div className="event-infos">
        <div>{presentationDate}</div>
        <div>{event.location}</div>
      </div>
      {isDetailsOpen ? (
        <details open={true} className="detailsOpened">
          <summary>About Event:</summary>
          <p>{event.description}</p>
        </details>
      ) : (
        <details open={false} className="detailsClosed">
          <summary>About Event:</summary>
          <p>{event.description}</p>
        </details>
      )}
      <div className="details-btn">
        {isDetailsOpen ? (
          <button className="hide-details" onClick={() => {setIsDetailsOpen(false);}}>
            Hide Details
          </button>
        ) : (
          <button className="show-details" onClick={() => {setIsDetailsOpen(true);}}>
            Show Details
          </button>
        )}
      </div>
    </li>
  );
}
  
export default Event;