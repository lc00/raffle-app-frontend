import React from "react";  
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Prizes from './Prizes'
import BottomMessage from './BottomMessage'
import Buttons from './Buttons'

// import Prize from './Prize';
const [ticketNum, setTicketNum] = useState("")

export default function PrizeForm(props) {

function Prizes(props) {
  const [result] = props.allFunc.checkUserInfo(props.info)
  let isUserInfoAllEntered = false

  result === 0 ? isUserInfoAllEntered = true : isUserInfoAllEntered = false
  


  return (
    <div>
    props.info.prizes.map(prize => {
      <Prize prize={prize} info={props.info} allFunc={props.allFunc}
      isUserInfoAllEntered={isUserInfoAllEntered}
      />
    }
      <BottomMessage info={props.info} allFunc={props.allFunc} /> 
      <Buttons info={props.info} allFunc={props.allFunc}  /> 
    )
    </div>
  )
}


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
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));


function Prize(props) {
  const classes = useStyles();


  return (
    <div>
      <h4>{props.prize.name}</h4>
      <img height='250' width='250' src={props.prize.imageUrl} alt='prize'></img>
      <h5>Current Entries: {props.prize.ticketsEntered}</h5>
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
          onChange={(e) => {
            setTicketNum(e.target.value)
            props.allFunc.handleTicketNumEntered(props.prize.id, e.target.value)
          }
        }
          
        />
      </div>
    </div>
  )
}

function BottomMessage(props) {
  let message = ''
  let result = props.allFunc.checkTicketsEntered()

  if(result === 0)
    message = `Ready to submit`
  else if (result > 0)
    message = `Warning: you have ${result} tickets remaining`
  else if (result < 0)
    message = `Warning: you have entered more tickets than you've donated`
  else
    message = ''

  return <h3>{message}</h3>

}

function Buttons(props) {
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
        onClick={ () => {
          setTicketNum(e.target.value)
          props.allFunc.handleTicketNumEntered(1, '')
          }
        }
      >
        Clear Tickets
      </Button>
    </div>
  );
}

}