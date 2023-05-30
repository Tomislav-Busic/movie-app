import { Navbar } from "./components/Navbar/Navbar";
import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
