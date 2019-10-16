import React from "react";  
import "./App.css";
import UserForm from "./UserForm";
import Tiers from "./Tiers"
import TopMessage from './TopMessage'
import Prizes from './Prizes'

function App() {
  return (
    <div className="App">
      <div className="top-container">
        <UserForm />
        <Tiers />
      </div>
        <TopMessage />
        <Prizes />
        {/* <BottomMessage /> */}
        {/* <Buttons /> */}

      
    </div>
  );
}

export default App;
