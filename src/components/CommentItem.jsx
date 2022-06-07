import React from 'react';
import AppContainer from './UI/container/AppContainer';
import AppButton from './UI/button/AppButton';

const CommentItem =({comment, key, answer}) =>{

  const ansMsg = (e) => {
    e.preventDefault()
    answer(comment.id)
  }
  return(
    <div className ='comment_item' style = {{
      margin: '5px',
      height: 'auto',
      background: 'grey',
      borderRadius:'10px'}}>

      <AppContainer style ={{
        display:'flex',

      }}>

      <AppContainer style ={{
        display: 'flex',
        margin: '3px',
        flexDirection:'column',
      }}>
      <div className ='user_icon'>Icon</div>
      <div className ='user_name'>{comment.user_name}</div>
      </AppContainer>

      <AppContainer style ={{
        display: 'flex',
        margin: '3px',
        flexDirection:'column',
      }}>
        <text className ='comment_text'>
        {comment.comment_text}
        </text>
      <div className ='text_info' style ={{
        display: 'flex',
      }}>
      <div className ='comment_date'>{comment.comment_date}</div>
      <AppButton>Развернуть</AppButton>
      <AppButton onClick ={ansMsg}>Ответить</AppButton>
      </div>

      </AppContainer>

      </AppContainer>
      <AppContainer>
      </AppContainer>
    </div>
  )
}

export default CommentItem;
