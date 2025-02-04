import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agent from "./pages/Agent";
import Map from "./pages/Map";
import Arsenal from "./pages/Arsenal";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { AppProviders } from "./contexts/AppProviders";

const App = () => {
  return (
    <AppProviders>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agent/:agentId" element={<Agent />} />
        <Route path="/arsenal" element={<Arsenal />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Footer />
    </AppProviders>
  );
};

export default App;
