import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function Buttons(props) {
  const classes = useStyles();

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
      >
        Submit
      </Button>
    </div>
  );
}
