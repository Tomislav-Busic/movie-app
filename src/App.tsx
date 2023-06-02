import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage";

import { AndroidNavbar } from "./layouts/androidNavbar/AndroidNavbar";
import { Header } from "./layouts/header/Header";
import { Navbar } from "./layouts/navbar/Navbar";

import "./assets/styles/app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        <Navbar />
        <AndroidNavbar />
      </Router>
    </div>
  );
}

export default App;
