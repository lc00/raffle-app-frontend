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
      topMessage: "",
      isTicketInputEnabled: false,
      tiers: {
        1: 1,
        5: 10,
        10: 25
      },
      prizes: [
        {
          id: 1,
          name: "One MILLION Dollars",
          imageUrl: {
            img: "http://placecorgi.com/250",
            ticketsEntered: 25
          }
        },
        {
          id: 2,
          name: "One BILLION Dollars",
          imageUrl: {
            img: "http://placecorgi.com/250",
            ticketsEntered: 15
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

  handleTicketInputEnable = (isEnabled) => {
    this.setState({isTicketInputEnabled: isEnabled})
  }

  validateEmail(email) {
    return email.match(/\w+@\w+[.]\w+/)
  }

  checkUserInfo(info) {
    let name = info.name
    let email = info.email
    let donationAmount = info.donationAmount

    let newStr = "Please enter your ";
    let arr = [];
    let emailValidated = false;

    if (!name) arr.push("name");
    if (!email) arr.push("email");
    else {
      emailValidated = this.validateEmail(email);
      if (!emailValidated) arr.push("email");
    }
    if (!donationAmount) arr.push("donation");
  
    let result 

    switch (arr.length) {
      case 1:
        result = 1
        break;
      case 2:
          result = 2
        break;
      case 3:
          result = 3
        break;
      case 0:
      default:
          result = 0
        break;
    }
    return [result, arr]
  }

  allFunc() {
    return {
      handleNameChange: this.handleNameChange,
      handleEmailChange: this.handleEmailChange,
      handleDonationAmountChange: this.handleDonationAmountChange,
      handleTicketInputEnable: this.handleTicketInputEnable,
      checkUserInfo: this.checkUserInfo,
      validateEmail: this.validateEmail,
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