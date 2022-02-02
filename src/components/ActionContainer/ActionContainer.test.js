import { render, screen } from "@testing-library/react";
import ActionContainer from "./ActionContainer";

describe("Given an ActionContainer component", () => {
  describe("when it is rendered", () => {
    test("it should render two buttons", () => {
      render(<ActionContainer />);

      const expectedButton = screen.getByRole("button");

      expect(expectedButton).not.toBeNull();
    });
  });
});
