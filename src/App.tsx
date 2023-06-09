import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { StackLayout } from "./layouts/StackLayout";

import { HomePage } from "./pages/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage";

import "./assets/styles/app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <StackLayout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
