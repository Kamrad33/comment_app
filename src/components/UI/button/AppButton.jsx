import React from 'react';
import classes from './AppButton.module.css';

const AppButton = ({children, ...props}) =>{
return(
  <button {...props} className ={classes.myButton}>
    {children}
  </button>
)
}

export default AppButton;
