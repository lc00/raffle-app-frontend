import React from "react";  
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'

class App extends React.Component {
  constructor() {
    super()

    this.state ={
      name: "",
      email: "",
      donationAmount: "",
      tiers: {
        1: 1,
        5: 10,
        10: 25
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

  handleNameChange = (name) => {
    this.setState({name: name})
  };

  handleEmailChange = (email) => {
    this.setState({email: email})
  };

  handleDonationAmountChange = (donationAmount) =>{
    this.setState({donationAmount: donationAmount})
  };

  allFunc() {
    return {
      handleNameChange: this.handleNameChange,
      handleEmailChange: this.handleEmailChange,
      handleDonationAmountChange: this.handleDonationAmountChange
    }
  }
  
    render() {
      return (
        <div className="App">
          <Router>

            <Route 
              path='/' 
              render={() => (
                <Home info={this.state} allFunc={this.allFunc()}/>
              )}
            />

            <Route 
              path='/summary'
              render={() => {
                console.log('summary page')
              }}
            />
          </Router>

          
        </div>
      )
    }
  
}

export default App;