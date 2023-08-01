import { Route, Routes } from "react-router-dom";

import "./App.css";

import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/" element={<h1>Fucker</h1>} /> */}

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
