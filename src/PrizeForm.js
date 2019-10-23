import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// import Prizes from './Prizes'
// import BottomMessage from './BottomMessage'
// import Buttons from './Buttons'
import Button from "@material-ui/core/Button";

// import Prize from './Prize';

export default function PrizeForm(props) {
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 200
    },
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    }
  }));

  const classes = useStyles();

  // console.log('props.allFunc...2', props.allFunc)


  const [ticketNum, setTicketNum] = useState("");


  let result = props.allFunc.checkTicketsEntered();

  if (result === 0) result = true;
  else result = false;

  console.log('props.info.prizes', props.info.prizes)

  if(props.info.prizes.length > 1) {
    
  
  return (
    <div>
      <h4>{props.info.prizes[0].name}</h4>
      <img
        height="250"
        width="250"
        src={props.info.prizes[0].imageUrl}
        alt="prize"
      ></img>
      <h5>Current Entries: {props.info.prizes[0].ticketsEntered}</h5>
      <div>
        <h3>Tickets</h3>
        <TextField
          disabled={!props.info.prizes[0]}
          id="outlined-bare"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          inputProps={{ 'aria-label': 'bare' }}
          value={ticketNum}
          onChange={e => {
            setTicketNum(e.target.value);
            props.allFunc.handleTicketNumEntered(
              props.info.prizes[0].id,
              e.target.value
            );
          }}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          disabled={!result}
          className={classes.button}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disabled={!result}
          className={classes.button}
          onClick={e => {
            console.log('hiii')
            setTicketNum('')
            props.allFunc.handleTicketNumEntered(
              props.info.prizes[0].id,
              ''
            );
          }}
          // onClick={props.allFunc.handleClearTicketNum}

        >
          Clear Tickets
        </Button>
      </div>
    </div>
  );
        }
        else 
        return <div></div>
}
