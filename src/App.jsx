import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../components/dashboard";
import ProblemView from "../components/ProblemView";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/problem/:id" element={<ProblemView />} />
      </Routes>
    </div>
  );
}

export default App;
