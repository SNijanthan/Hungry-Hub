import Header from "../Header";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../Redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const headerButton = screen.getByRole("button", { name: "Logout" });
  expect(headerButton).toBeInTheDocument();
});

it("Should render cart item with zero", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("0");
  expect(cartItems).toBeInTheDocument();
});

it("Should check whether cart is present or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/0/);
  expect(cart).toBeInTheDocument();
});

it("Should change Login to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  fireEvent.click(logoutButton);

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});
