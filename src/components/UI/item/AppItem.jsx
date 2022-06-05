import React from 'react';
import classes from './AppItem.module.css';

const AppItem = ({children, ...props}) =>{
  return(
    <div {...props} className ={children.myItem}>
    {children}
    </div>
  )
}

export default AppItem;
