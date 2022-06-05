import React from 'react';
import AppContainer from '../container/AppContainer'
import classes from './AppInput.module.css';

const AppInput =({children, ...props}) =>{
  return(

    <textarea {...props} className = {classes.myInput}></textarea>
    
  )
}
export default AppInput;
