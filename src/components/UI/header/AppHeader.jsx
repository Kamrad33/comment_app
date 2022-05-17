import React from 'react';
//стиль как свойство объекта для изоляции стилей
import classes from './AppHeader.module.css';


const AppHeader = ({children, ...props}) => {
  return(
    <div {...props} className ={classes.myHeader}>
      {children}
    </div>
  )
}

export default AppHeader;
