import React from 'react';
import classes from './AppContent.module.css';

const AppContent = ({children, ...props}) =>{
  return(
    <div>
    <div {...props} className = {classes.myContent}>
    {children}
    </div>
    </div>
  )
}

export default AppContent;
