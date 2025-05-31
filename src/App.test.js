import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText(/Reserve a Table/i);
  expect(headingElement).toBeInTheDocument();
});

test('validates form inputs', () => {
  render(<BookingForm />);
  
  // Submit empty form to trigger validation
  const submitButton = screen.getByText(/Confirm Reservation/i);
  fireEvent.click(submitButton);
  
  // Check if error messages appear
  const nameError = screen.getByText(/Name is required/i);
  expect(nameError).toBeInTheDocument();
});