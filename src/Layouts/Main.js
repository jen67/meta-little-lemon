import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import BookingPage from '../Pages/BookingPage/BookingPage';


const Main = () =>{
  

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage/>} />
      </Routes>
    </main>
  );
}

export default Main;