import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import BookingForm from './component/BookingForm';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent } from "@testing-library/react";


test('Renders the BookingForm heading', () => {
  render(<BrowserRouter><BookingForm /></BrowserRouter>);
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Date");
  expect(headingElementNew).toBeInTheDocument();
})

test('Initialize/Update Times', () => {
  render(<BrowserRouter><BookingForm /></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = []
  // userEvent.selectOptions(screen.getByLabelText("time"),screen.getByRole('option', { name: testTime}))
  // expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);
})