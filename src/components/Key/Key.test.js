import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When it is rendered with  1", () => {
    test("Then it should show a button with number 1", () => {
      const number = 1;
      render(<Key digit={number} />);

      const expectedNumber = screen.getByText("1");

      expect(expectedNumber).toBeInTheDocument();
    });
  });
});
