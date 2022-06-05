import React from 'react';
import classes from './AppContainer.module.css';

const AppContainer = ({children, ...props}) =>{
  return(
    <div>
    <div {...props} className = {classes.myContainer}>
    {children}
    </div>
    </div>
  )
}

export default AppContainer;
