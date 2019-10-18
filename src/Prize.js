import React, { useState } from "react";  
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function Prize(props) {
  const classes = useStyles();

  const [ticketNum, setTicketNum] = useState("")

  return (
    <div>
      <h4>{props.prize.name}</h4>
      <img src={props.prize.imageUrl.img} alt='prize'></img>
      <h5>Current Entries: {props.prize.imageUrl.ticketsEntered}</h5>
      <div>
        <h3>Tickets</h3>
        <TextField
          disabled={!props.isUserInfoAllEntered}
          id="outlined-bare"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          inputProps={{ 'aria-label': 'bare' }}
          value={ticketNum}
          onChange={e => setTicketNum(e.target.value)}
        />
      </div>
    </div>
  )
}