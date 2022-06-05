import React, {useState} from 'react';
import './styles/App.css';
import axios from 'axios';
import AppHeader from './components/UI/header/AppHeader'
import AppButton from './components/UI/button/AppButton'
import AppContent from './components/UI/content/AppContent'
import AppContainer from './components/UI/container/AppContainer'
import AppFooter from './components/UI/footer/AppFooter'
import AppInput from './components/UI/input/AppInput'
import AppLeftBar from './components/UI/left_bar/AppLeftBar'
import AppItem from './components/UI/item/AppItem'
import CommentItem from './components/CommentItem'
import CommentList from './components/CommentList'
function App() {
  let i = 0;

  const [messageText, setMessageText] = useState();
  const [limit, setLimit] = useState(5);
  const [comments, setComments] = useState([
    {id: 1, user_name: '1', comment_text:'text comment ayaya', comment_date:'december', message_root:'0'},
    {id: 2, user_name: 'vasya', comment_text:'text comment ayaya', comment_date:'december',message_root:'1'},
    {id: 3, user_name: 'igor', comment_text:'text comment igor', comment_date:'december',message_root:'1'},
    {id: 4, user_name: 'neigor', comment_text:'text comment ayaya', comment_date:'december',message_root:'1'},
    {id: 5, user_name: '1', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},
    {id: 6, user_name: '1', comment_text:'text comment ayaya', comment_date:'december',message_root:'5'},
    {id: 7, user_name: '1', comment_text:'text comment ayaya', comment_date:'december',message_root:'5'},
    {id: 8, user_name: '8', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},
    {id: 9, user_name: '9', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},
    {id: 10, user_name: '10', comment_text:'text comment ayaya1', comment_date:'december',message_root:'0'},
    {id: 11, user_name: '11', comment_text:'text comment ayaya2', comment_date:'december',message_root:'0'},
    {id: 13, user_name: '13', comment_text:'text comment ayaya3', comment_date:'december',message_root:'0'},
    {id: 14, user_name: '14', comment_text:'text comment ayaya4', comment_date:'december',message_root:'0'},
    {id: 15, user_name: '15', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},
    {id: 16, user_name: '16', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},
    {id: 17, user_name: '17', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},
    {id: 18, user_name: '18', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},

  ]);
function upLimit() {
  if (comments.length > limit){
  setLimit(limit+5);
};
}

function loadMessages() {
  axios.post('http://localhost:1348/loadMessages', {
    method: 'POST',
    mode: 'no-cors',
    bodyUsed: true,
    headers:{
      'Access-Control-Allow-Origin':'*',
      "Access-Control-Allow-Methods":"GET, PUT, POST, DELETE",
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
      'Content-Type': 'application/json',

    },
  }).then(res => {
    console.log('COMENTS:', comments);
    console.log('COMENTS STATE: ', JSON.parse(JSON.stringify(res.data)));
    setComments(JSON.parse(JSON.stringify(res.data)))
    console.log('COMENTS after:', comments);
  })

}
function sendMessage() {
  console.log('show message text', messageText);
axios.get('http://localhost:1348/testReq', {
  method: 'GET',
  mode: 'no-cors',
  bodyUsed: true,
  headers:{

  },
}).then(res =>{
  console.log('works');
}).catch((error)=>{
  console.warn('error', error);
})
};
  return (
    <div className="App">
    <AppHeader>
      <AppButton onClick = {upLimit}>
        Rooms
      </AppButton>
      Header
      <AppButton>
        Acc
      </AppButton>
    </AppHeader>

    <AppLeftBar>
      <AppContent>
        <AppItem>
          Item1
        </AppItem>
        <AppItem>
          Item2
        </AppItem>
        <AppItem>
          Item3
        </AppItem>
      </AppContent>
    </AppLeftBar>

    <AppContent>

    { (comments.filter(comment => comment.message_root == 0).slice(0,limit).map(filtredComment =>(

          <div>
          <CommentItem comment = {filtredComment} key={filtredComment.id}/>
          <CommentList comments = {comments} idKey={filtredComment.id}/>
          </div>

    )))}
    {
    comments.length >= limit ?
    <AppContent style ={{height: '10%'}}>
    <AppButton onClick = {upLimit}>
    Развернуть
    </AppButton>
    </AppContent>
    : <div></div>
  }
    </AppContent>

    <AppFooter>
    <div style ={{
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',

      width: '100%',
      height: '100%',
    }}>
    <AppContainer style ={{

      width: '85vw',
      margin: '5px',
      justifyContent: 'center',
    }}>
    <AppInput
    value = {messageText}
    placeholder ='Напишите текст'
    onChange={e => setMessageText(e.target.value)}/>
    </AppContainer>
    <AppContainer style ={{


      width: '5vw',
      minWidth: '50px',
      margin: '5px',
      justifyContent: 'center',
    }}>
    <AppButton onClick ={sendMessage}>
    OK
    </AppButton>
    </AppContainer>
    </div>
    </AppFooter>
    </div>
  );
}

export default App;
//
