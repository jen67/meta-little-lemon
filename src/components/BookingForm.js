import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.date) tempErrors.date = "Date is required";
    if (!formData.time) tempErrors.time = "Time is required";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    alert("Booking successful!");
    console.log("Form submitted:", formData);
  };

  return (
    <section className="booking-section">
      <div className="container">
        <h2>Reserve a Table</h2>
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              aria-required="true"
            />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              aria-required="true"
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="form-control"
                aria-required="true"
              />
              {errors.date && <p className="form-error">{errors.date}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="form-control"
                aria-required="true"
              />
              {errors.time && <p className="form-error">{errors.time}</p>}
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="form-control"
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Business">Business</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary">Confirm Reservation</button>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;