import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Movie } from "./pages/Movie";

import { AndroidNavbar } from "./layouts/androidNavbar/AndroidNavbar";
import { Navbar } from "./layouts/navbar/Navbar";
import { Footer } from "./layouts/footer/Footer";

import "./assets/styles/app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
        <Footer />
        <AndroidNavbar />
      </Router>
    </div>
  );
}

export default App;
