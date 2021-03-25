import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = (props) => {

  return (
    <form className='login' noValidate autoComplete="off" onSubmit={props.handleSubmit}>
      <TextField className="input" id="standard-basic" label="Username*" />
      <TextField className="input" id="standard-basic" label="Password*" />
      <Button type="submit" variant="contained" color="primary">
      Login
      </Button>
    </form>
  )
}

export default Login
