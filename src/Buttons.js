import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    'background-color': '#659EC7'
  },
  input: {
    display: "none"
  }
}));



export default function Buttons(props) {
  let history = useHistory();
  const classes = useStyles();

  const handleSubmitButton = () => {
    const url = `https://localhost:5000/raffles/${props.info.id}/entry`
    const entries = []

    // props.entries.forEach(entry => {
    //     entries.push(
    //       {
    //         prize: {
    //           id: prizeId
    //         },
    //         tickets: prize['currentUserTicketsEntered']
    //       }
    //     )
    
    // })
    console.log('props', props)
    // console.log('props.entries', props.entries)

    for (let i in props.info.entries) {
      console.log('i', i)
      entries.push(
        {
          prize: {
            id: i
          },
          tickets: props.info.entries[i]
        }
      )
    }

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

    console.log('info', info)

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
        color="primary"
        // disabled={!result}
        className={classes.button}
        onClick={handleSubmitButton}
      >
        Submit
      </Button>
      <Button
        variant="contained"
        color="primary"
        // disabled={!result}
        className={classes.button}
        onClick={props.allFunc.handleClearTicketNum}
      >
        Clear Tickets
      </Button>
    </div>
  );
}
