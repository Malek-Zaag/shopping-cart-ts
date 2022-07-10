import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import { Navbar } from "../components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Store } from "../pages/Store";
import { About } from "../pages/About";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
