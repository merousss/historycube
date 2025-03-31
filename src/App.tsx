import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BattlePass from "./pages/battlepass";
import { Sidenav } from "./components/sidenav/Sidenav";
import { Header } from "./components/header/Header";
import { Profile } from "./pages/profile/Profile";
import { Background } from "./utils/Background";
import { Leveling } from "./pages/leveling/Leveling";
import { HomePage } from "./pages/home/HomePage";

//test ignoring
function App() {
  const page = window.location.pathname.startsWith("/dashboard")

  return (
    <div className="App">
      
      <BrowserRouter>
      {page &&
        (
        <>
          <Background />
          <Sidenav />
          <Header />
        </>
        )}
        
        <div className={page ? "dashboard-container" : "app-container"}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            
            <Route path="/dashboard/battlepass/" element={<BattlePass />} />
            <Route path="/dashboard/profile/" element={<Profile />} />
            <Route path="/dashboard/leveling-tree/" element={<Leveling/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
