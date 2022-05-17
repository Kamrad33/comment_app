import React from 'react';
import classes from './AppLeftBar.module.css';

const AppLeftBar = ({children, ...props}) =>{
  return(
    <div className = {classes.myLeftBar}>{children}</div>
  )
}

export default AppLeftBar;
