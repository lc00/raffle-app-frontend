import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
  const classes = useStyles();

  // const handleClearTicketsButon = (props) => {
  //   console.log('props.allFunc...1', props.allFunc)

  //   props.allFunc.handleClearTicketNum()
  // }

  console.log('props.allFunc...2', props.allFunc)

  let result = props.allFunc.checkTicketsEntered()

  if (result === 0) result = true
  else              result = false

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        // disabled={!result}
        className={classes.button}
      >
        Submit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        // disabled={!result}
        className={classes.button}
        onClick={props.allFunc.handleClearTicketNum}
      >
        Clear Tickets
      </Button>
    </div>
  );
}
