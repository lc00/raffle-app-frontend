import React from "react";  
import "./App.css";
import UserForm from "./UserForm";
import Tiers from "./Tiers"
import TopMessage from './TopMessage'
import Prizes from './Prizes'

class App extends React.Component {
  constructor() {
    super()

    this.state ={
      name: "",
      email: "",
      donationAmount: "",
      tiers: {
        oneDollar: 1,
        fiveDollar: 10,
        tenDollar: 25
      },
      prizes: [
        {
          oneMillionDollar: {
            img: "http://placecorgi.com/250",
            currentEntries: 15
          }
        },
        {
          oneBillionDollars: {
            img: "http://placecorgi.com/250",
            currentEntries: 5
          }
        }
      ]
      
    }
  }


    // const handleNameChange = name => event => {
    //   setValues({ ...values, [name]: event.target.value });
    // };
    render() {
      return (
        <div className="App">
          <div className="top-container">
            <UserForm />
            <Tiers />
          </div>
            <TopMessage />
            <Prizes prizes={this.state.prizes}/>
            {/* <BottomMessage /> */}
            {/* <Buttons /> */}

          
        </div>
      )
    }
  
}

export default App;