import React from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
  };
  
  return (
    <div id="number-of-events">
      <p>Number of Events:</p>
      <input
        type="text"
        defaultValue="32"
        onChange={handleInputChanged}
        className = "event-number"
        data-testid="numberOfEventsInput"
      />
    </div>
  );
}
  
export default NumberOfEvents;