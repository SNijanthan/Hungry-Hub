import { render, screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";

describe("About us page test cases", () => {
  it("Should not have input box", () => {
    render(<About />);

    const inputBoxCheck = screen.queryAllByRole("textbox");
    expect(inputBoxCheck).toHaveLength(0);
  });
});
