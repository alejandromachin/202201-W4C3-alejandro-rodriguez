import { render, screen } from "@testing-library/react";
import Keyboard from "./Keyboard";

describe("Given a Keyboard component", () => {
  describe("When it is instantiated", () => {
    test("then it should render 10 buttons", () => {
      const numberOfDigits = 9;
      // const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

      render(<Keyboard />);

      const expectedNumberOfButtons = screen.getAllByRole("button").length;

      expect(expectedNumberOfButtons).toBe(numberOfDigits);
    });
  });
});
