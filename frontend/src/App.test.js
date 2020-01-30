import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("template", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/template/i);
  expect(linkElement).toBeInTheDocument();
});
