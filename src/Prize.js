import React from "react";  

export default function Prize(props) {
  return (
    <div>
      <h4>One million dollars</h4>
      <img src={props.prize.img} alt='prize'></img>
      <h5>Current Entries: {props.prize.currentEntries}</h5>
      <div>
        <h3>Tickets</h3>
        <input 
          type="text"
          name="ticketnumber"
          value='blah'
        />
      </div>
    </div>
  )
}