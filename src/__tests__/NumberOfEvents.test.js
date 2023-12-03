import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

describe("<NumberOfEvents /> component", () => {

    let NumberOfEventsComponent;

    beforeEach(() => {
      NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}} />);
    });
  
    test("Text box rendered successfully", () => {
      const NOETextBox = NumberOfEventsComponent.queryByRole("textbox");
      expect(NOETextBox).toBeInTheDocument();
      expect(NOETextBox).toHaveClass("event-number");
    });
  
    test("Default number of events is 32", () => {
      const textBox = NumberOfEventsComponent.queryByRole("textbox");
      expect(textBox.value).toBe("32");
    });

    test("Number of events are updated as user changes number of events value", async () => {
      const input = NumberOfEventsComponent.queryByRole("textbox");
      await userEvent.type(input, "{backspace}{backspace}10");
      expect(input).toHaveValue("10");
    });

  });