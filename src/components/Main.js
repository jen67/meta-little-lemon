import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import BookingPage from '../Pages/BookingPage/BookingPage';

// Initial times data
const initializeTimes = () => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
};

// Reducer function for managing available times
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      
      // For now, we return same times regardless of date
      return initializeTimes();
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={
          <BookingPage 
            availableTimes={availableTimes} 
            updateTimes={updateTimes} 
          />
        } />
      </Routes>
    </main>
  );
}

export default Main;