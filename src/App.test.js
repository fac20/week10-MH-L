import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Loading Homepage and Select Bar", () => {
  render(<App></App>);
  screen.getByDisplayValue("Who the FAC are you?");
});

test("Loading Homepage and Selecting Lisa", () => {
  render(<App></App>);
  const selectNode = screen.getByDisplayValue("Who the FAC are you?");
  fireEvent.change(selectNode, { target: { value: "LiCern" } });
});
