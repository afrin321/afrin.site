import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import AboutMe from "./components/Home/AboutMe";
import Education from "./components/Home/Education";
import LandingSection from "./components/Home/LandingSection";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}></Route>
        <Route path="home" element={<Home />}>
          <Route index path="" element={<LandingSection />}></Route>
          <Route path="aboutme" element={<AboutMe />}></Route>
          <Route path="education" element={<Education />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
