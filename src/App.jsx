import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Back from "./components/Back";
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
      disable: "mobile",
    });
  });
  return (
    <>
      <Header />
      <Back />
      <Preloader />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
      </Routes>
    </>
  );
}

export default App;
