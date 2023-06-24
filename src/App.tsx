import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { StackLayout } from "./layouts/StackLayout";

import { HomePage } from "./pages/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { MoviePage } from "./pages/MoviePage";

import "./assets/styles/app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <StackLayout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
