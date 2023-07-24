import React from "react";
import Header from "../components/Header";
import Monitoramento from "../components/Monitoramento";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <Header />
      </header>
      <div className="Home-body">
      <Monitoramento />
    </div>
    </div>
  );
}

export default Home;