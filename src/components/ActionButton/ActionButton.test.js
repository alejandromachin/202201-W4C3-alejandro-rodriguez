import { render, screen } from "@testing-library/react";
import ActionButton from "./ActionButton";

describe("Given an ActionButton component", () => {
  describe("When it is rendered with the text 'hola'", () => {
    test("Then it should render a button with the text 'hola'on it", () => {
      const expectedText = "hola";
      render(<ActionButton text={expectedText} />);

      const expectedButton = screen.getByText("hola");

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
