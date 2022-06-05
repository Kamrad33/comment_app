import React from 'react';
import classes from './AppFooter.module.css';

const AppFooter = ({children, ...props}) =>{
  return(
    <div {...props} className = {classes.myFooter}>
    {children}
    </div>
  )
}

export default AppFooter
