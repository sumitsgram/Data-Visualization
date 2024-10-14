import React from "react";
import { FilterProvider } from "./context/FilterContext";
import Dashboard from "./pages/Dashboard";
import "./styles/global.css";

function App() {
  return (
    <FilterProvider>
      <Dashboard />
    </FilterProvider>
  );
}

export default App;
