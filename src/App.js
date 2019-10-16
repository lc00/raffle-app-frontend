import React from "react";
import "./App.css";
import UserForm from "./UserForm";
import Tiers from "./Tiers"

function App() {
  return (
    <div className="App">
      <div className="top-container">
        <UserForm />
        <Tiers />

      </div>
    </div>
  );
}

export default App;
