import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

let component;
beforeEach(() => {
  component = render(<Counter />);
});

test('renders counter message', () => {
  const counterMessage = component.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = component.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = component.getByText('+');
  fireEvent.click(incrementButton);

  const updatedCount = component.getByTestId('count');
  expect(updatedCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const decrementButton = component.getByText('-');
  fireEvent.click(decrementButton);

  const updatedCount = component.getByTestId('count');
  expect(updatedCount).toHaveTextContent('-1');
});