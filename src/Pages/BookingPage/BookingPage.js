import React from 'react';
import BookingForm from '../../components/BookingForm';

function BookingPage({ availableTimes, updateTimes }) {
  return (
    <section className="booking-page">
      <div className="container">
        <div className="booking-header">
          <h1>Reserve Your Table</h1>
          <p>Please fill out the form below to book your reservation at Little Lemon.</p>
        </div>
        
        <BookingForm 
          availableTimes={availableTimes}
          updateTimes={updateTimes}
        />
        
        <div className="booking-info">
          <h2>Reservation Information</h2>
          <ul>
            <li>Reservations are available up to 30 days in advance</li>
            <li>For parties larger than 10, please call us directly</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BookingPage;