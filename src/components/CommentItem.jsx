import React from 'react';
import AppContainer from './UI/container/AppContainer'
const CommentItem =(props) =>{
  return(
    <div className ='comment_item' style = {{
      margin: '5px',
      height: 'auto',
      background: 'grey',}}>

      <AppContainer style ={{
        display:'flex',

      }}>

      <AppContainer style ={{
        display: 'flex',
        margin: '3px',
        flexDirection:'column',
      }}>
      <div className ='user_icon'>Icon</div>
      <div className ='user_name'>{props.comment.user_name}</div>
      </AppContainer>

      <AppContainer style ={{
        display: 'flex',
        margin: '3px',
        flexDirection:'column',
      }}>
        <text className ='comment_text'>
        {props.comment.comment_text}
        </text>
      <div className ='text_info' style ={{
        display: 'flex',
      }}>
      <div className ='comment_date'>{props.comment.comment_date}</div>
      <button>Развернуть</button>
      <button>ответить</button>
      </div>

      </AppContainer>

      </AppContainer>
      <AppContainer>
      </AppContainer>
    </div>
  )
}

export default CommentItem;
