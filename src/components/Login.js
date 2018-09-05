import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import LoginHeader from './LoginHeader';
import { TextField, Divider, Button } from '@material-ui/core';

const styles = {
  root: {
    width: 450,
    height: 500
  },
  loginContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBody: {
    padding: '8px 44px'
  },
  inputField: {
    margin: '36px auto'
  },
  formActions: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '24px 0'
  },
  baseBtn: {
    textTransform: 'capitalize'
  }
};

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.loginContainer}>
        <Paper className={classes.root}>
          <LoginHeader>Login</LoginHeader>
          <Divider />
          <div className={classes.loginBody}>
            <TextField
              label="E-mail"
              type="email"
              className={classes.inputField}
              autoFocus
              fullWidth
            />
            <div className={classes.formActions}>
              <Button
                variant="text"
                color="primary"
                className={classes.baseBtn}
                style={{ paddingLeft: 0 }}>
                Create Account
              </Button>
              <Button variant="contained" color="primary" className={classes.baseBtn}>
                Login
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
