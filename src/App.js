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
          <Router>

            <Route 
              path='/' 
              render={() => (
                <Home info={this.state}/>
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