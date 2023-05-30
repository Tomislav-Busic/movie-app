import { Navbar } from "./components/Navbar/Navbar";
import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { AndroidNavbar } from "./components/AndroidNavbar/AndroidNavbar";

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
