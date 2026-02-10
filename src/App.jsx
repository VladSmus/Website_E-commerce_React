import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom ";
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

// COMPONENT = Function that returns JSX
export default App;
