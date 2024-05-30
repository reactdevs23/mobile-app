import React from "react";
import TopBar from "./components/TopBar/TopBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="mainWrapper">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
