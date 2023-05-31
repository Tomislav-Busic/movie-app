import "./styles/app.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/homePage/HomePage";
import { FavoritesPage } from "./pages/favoritesPage/FavoritesPage";
import { MoviePage } from "./pages/moviePage/MoviePage";
import { AndroidNavbar } from "./layouts/androidNavbar/AndroidNavbar";
import { Navbar } from "./layouts/navbar/Navbar";

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
        <AndroidNavbar />
      </Router>
    </div>
  );
}

export default App;
