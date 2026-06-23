import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    // Mock the required props for BookingForm
    const availableTimes = ['17:00', '18:00', '19:00'];
    const updateTimes = jest.fn(); // Create a mock function
    
    render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />);
    
    // Test for the heading "Reserve a Table"
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})