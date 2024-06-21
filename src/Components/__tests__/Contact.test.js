import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  it("Contact us page should load heading", () => {
    render(<ContactUs />);
    // Querying
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Contact us page should load button", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("contact us page should load input", () => {
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText("What's your full name?");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load 3 input boxes in contact us page", () => {
    render(<ContactUs />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(3);
  });
});
