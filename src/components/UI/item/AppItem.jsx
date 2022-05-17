import React from 'react';
import classes from './AppItem.module.css';

const AppItem = ({children, ...props}) =>{
  return(
    <div className ={children.myItem}>
    {children}
    </div>
  )
}

export default AppItem;
