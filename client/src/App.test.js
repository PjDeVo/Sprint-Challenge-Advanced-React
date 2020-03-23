import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("player form inputs contain data", () => {
  const container = render(<App />);

  const nameInput = container.getByTestId("name-input");
  const countryInput = container.getByTestId("country-input");

  if (nameInput.innerHTML === null || countryInput.innerHTML === null) {
    expect(container).toThrow();
  }
});

test("name input is > 3", () => {
  const container = render(<App />);

  const nameInput = container.getByTestId("name-input");

  if (nameInput.innerHTML < 3) {
    expect(nameInput).toThrow();
  }
});
