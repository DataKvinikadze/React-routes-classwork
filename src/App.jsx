import React from "react";
import Header from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Loaction from "./pages/Loaction";
import Impact from "./pages/Impact";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/location" element={<Loaction />} />
        <Route path="/impact" element={<Impact />} />
      </Routes>
    </>
  );
}

export default App;
