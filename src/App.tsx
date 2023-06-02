import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/homePage";
import { FavoritesPage } from "./pages/favoritesPage";
import { MoviePage } from "./pages/moviePage";

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
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
        <Footer />
        <AndroidNavbar />
      </Router>
    </div>
  );
}

export default App;
