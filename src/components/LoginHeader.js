import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  loginHeader: {
    maxHeight: 100,
    textAlign: 'center',
    padding: '36px',
    fontSize: 24,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxSizing: 'border-box'
  }
});

const LoginHeader = ({ children, classes }) => {
  return <div className={classes.loginHeader}>{children}</div>;
};

export default withStyles(styles)(LoginHeader);
