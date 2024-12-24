// src/App.jsx
import React from "react";
import {
  BrowserRouter as BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import DndPage from "./pages/DndPage";

function App() {
  return (
    <BrowserRouter basename="/VITE/">
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/dnd" element={<DndPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
