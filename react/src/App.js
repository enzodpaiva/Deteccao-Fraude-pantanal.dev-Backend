// src/App.js

import React from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";
import FilaDeProcessos from "./components/ProcessesQueue";
import Monitoramento from "./components/Monitoramento";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="App-body">
      {/* <Menu /> */}
      {/* <FilaDeProcessos /> */}
      <Monitoramento />
    </div>
    </div>
  );
}

export default App;
