import { Route, Routes } from "react-router-dom";

import "./App.css";

import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import Layout from "./pages/Layout/Layout";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Route>

    </Routes>
  );
}

export default App;
