import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));



export default function Buttons(props) {

  let history = useHistory();

  const classes = useStyles();

  // const handleClearTicketsButon = (props) => {
  //   console.log('props.allFunc...1', props.allFunc)

  //   props.allFunc.handleClearTicketNum()
  // }

  
  const handleSubmitButton = () => {
    const url = `https://localhost:5000/raffles/${props.info.id}/entry`
    const entries = []

    props.info.prizes.forEach(prize => {
      if(prize['currentUserTicketsEntered']) {
        entries.push(
          {
            prize: {
              id: prize.id
            },
            tickets: prize['currentUserTicketsEntered']
          }
        )
      }
    })
    const info = {
      user: {
        name: props.info.name,
        email: props.info.email
      },
      donation: {
        amount: props.info.donationAmount
      },
      entries: entries
    }

    // axios.post(url, info)
    //   .then(response => {
    //     console.log(`post request, response.data, ${response.data}`)
    //     this.setState({isSubmitted: true})
    //   })
    //   .catch(err => {
    //     console.error(`post request, error ${err}`)
    //   })
    
    // assume it's success 


    history.push('/summary')

  }


  let result = props.allFunc.checkTicketsEntered()

  if (result === 0) result = true
  else              result = false

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        disabled={!result}
        className={classes.button}
        onClick={handleSubmitButton}
      >
        Submit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        // disabled={!result}
        disabled
        className={classes.button}
        onClick={props.allFunc.handleClearTicketNum}
      >
        Clear Tickets
      </Button>
    </div>
  );
}
