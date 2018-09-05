import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import LoginHeader from './LoginHeader';
import { TextField, Divider, Button } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = {
  root: {
    width: 450
    // height: 500
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
    margin: '24px auto'
  },
  formActions: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '24px 0'
  },
  baseBtn: {
    textTransform: 'capitalize'
  },
  fpassBtn: { color: '#1a73e8', fontSize: 14, cursor: 'pointer' }
};

class Login extends Component {
  state = {
    nextStep: false
  };

  handleNext = e => {
    e.preventDefault();

    this.setState({ nextStep: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.loginContainer}>
        <Paper className={classes.root}>
          <LoginHeader>Login</LoginHeader>
          <Divider />
          <div className={classes.loginBody}>
            {this.state.nextStep ? (
              <TextField
                label="Password"
                type="password"
                autoFocus
                fullWidth
                className={classes.inputField}
              />
            ) : (
              <TextField
                label="E-mail"
                type="email"
                autoFocus
                fullWidth
                className={classes.inputField}
              />
            )}

            <div className={classes.formActions}>
              {this.state.nextStep ? (
                <ButtonBase className={classes.fpassBtn}>Forgot password?</ButtonBase>
              ) : (
                <Button
                  variant="text"
                  color="primary"
                  className={classes.baseBtn}
                  style={{ paddingLeft: 0 }}>
                  Create Account
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                className={classes.baseBtn}
                onClick={this.handleNext}>
                {this.state.nextStep ? 'Login' : 'Next'}
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
