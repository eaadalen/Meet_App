import { render } from "@testing-library/react";
import { getEvents } from "../api";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";

describe("<Event/> component", () => {
  let EventItem;
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });
  beforeEach(async () => {
    EventItem = render(<Event event={allEvents[0]}/>);
  });

  test("Contains a summary key", () => {
    expect(EventItem.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });
  test("Contains a location key", () => {
    expect(EventItem.queryByText(allEvents[0].location)).toBeInTheDocument();
  });
  test("Event details button renders correctly", () => {
    expect(EventItem.queryByText("Show Details")).toBeInTheDocument();
  });
  test("Event details are hidden by default", () => {
    expect(EventItem.container.querySelector(".detailsOpened")).not.toBeInTheDocument();
  });
  test("Event details are displayed when 'Show Details' button is clicked", async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventItem.queryByText("Show Details");
    await user.click(showDetailsButton);
    const descriptionSection = EventItem.container.querySelector(".detailsOpened");
    expect(descriptionSection).toBeVisible();
  });
  test("Event details are hidden when 'Hide Details' button is clicked", async () => {
    const user = userEvent.setup();
    const hideDetailsButton = EventItem.queryByText("Hide Details");
    await user.click(hideDetailsButton);
    const descriptionSection = EventItem.container.querySelector(".detailsClosed");
    expect(descriptionSection).not.toBeVisible();
  });

});