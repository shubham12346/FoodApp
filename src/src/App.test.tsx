import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";

test("should render te app ", () => {
  render(<App />);

  const text = screen.getByText("Vite + React");
  expect(text).toBeInTheDocument();
});
