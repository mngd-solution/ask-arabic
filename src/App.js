import "./App.css";
import ToggleColorMode from "./components/ToggleColorMode";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {



  return (
    <div className="App">
      <ToggleColorMode />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
