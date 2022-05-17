import React from 'react';
import classes from './AppInput.module.css';

const AppInput =({children, ...props}) =>{
  return(
    <input className = {classes.myInput}></input>
  )
}
export default AppInput;
