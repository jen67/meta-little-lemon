import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import BookingPage from "../Pages/BookingPage/BookingPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import MenuPage from "../Pages/MenuPage/MenuPage";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </main>
  );
};

export default Main;
