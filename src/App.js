import React, {useState, useEffect} from 'react';
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

  const [messageText, setMessageText] = useState();
  const [limit, setLimit] = useState(5);
  const [answerKey, setAnswerKey] = useState(0);
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
    {id: 19, user_name: '19', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},
    {id: 20, user_name: '20', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},
    {id: 21, user_name: '21', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},
    {id: 22, user_name: '22', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},
    {id: 23, user_name: '23', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},
    {id: 24, user_name: '24', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},
    {id: 25, user_name: '25', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},
    {id: 26, user_name: '26', comment_text:'text comment ayaya', comment_date:'december',message_root:'0'},
  ]);

useEffect( () =>{
  console.log('USE EFF');
  loadMessages();
}, [])

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
  }).catch((error)=>{
    console.warn('error', error);
  })
};


function sendMessage() {
  let date;
  date = new Date().toISOString().slice(0, 19).replace('T', ' ');

  console.log("KRUTA123", date);
  let messageData = JSON.stringify({
    user_name: 'vasya',
    user_id: 3,
    comment_text: messageText,
    comment_date: date,
    message_root: answerKey,

  });
  console.log("KRUTA",messageData);
  loadMessages();
  loadMessages();
  //let dateMessage = Date.now();

axios.post('http://localhost:1348/sendMessage', {
  user_name: 'vasya',
  user_id: 3,
  comment_text: messageText,
  comment_date: date,
  message_root: answerKey.id,

  method: 'POST',
  mode: 'no-cors',
  bodyUsed: true,
  headers:{
    'Access-Control-Allow-Origin':'*',
    "Access-Control-Allow-Methods":"GET, PUT, POST, DELETE",
    "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
    'Content-Type': 'application/json',
  },
}).then(res =>{
  console.log('works');
  loadMessages();

}).catch((error)=>{
  console.warn('error', error);
})

};

const answerMessage =(id) =>{
  //let ans = comments.filter(comment => comment.id == id).map(filtredComment => filtredComment.comment_text);
  let ans = comments.filter(comment => comment.id == id);
  console.log('OUE', id);
  console.log('test', ans);
  console.log('test2', ans[0].id);
  setAnswerKey(ans[0]);
  console.log('key', answerKey);
}
  return (
    <div className="App">
    <AppContainer >
    <AppHeader>
      <AppButton >
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
    <AppContainer style ={{
      height:'90vh',

      minHeight:'75vh',
      display: 'flex',
      flexDirection:'column',
      justifyContent:'space-between'
    }}>
    <AppContent>
    {(comments.filter(comment => comment.message_root == 0).slice(0,limit).map(filtredComment =>(
          <div>
          <CommentItem comment = {filtredComment} key={filtredComment.id} answer ={answerMessage}/>
          {comments.filter(comment =>comment.message_root == filtredComment.id) !=0 ?
            <CommentList comments = {comments} idKey={filtredComment.id} answerKey ={answerMessage}/>
          : <div></div>}
          </div>
    )))}

    {limit < comments.length && comments.length - limit > 5  ?
    <AppContainer>
    <AppButton onClick = {()=>setLimit(limit + 5)}>
    Развернуть
    </AppButton>
    </AppContainer>
    : <div></div>}

    </AppContent>

    <AppFooter>
    {/*<CommentItem comment = {comments[2]} key={1} answer ={answerMessage} />*/}
{ answerKey != 0 ?
    <AppContainer style={{
      width: 'auto',
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'space-between',
      margin:'5px'
    }}>
    <AppContainer style ={{
      background: 'grey',
      height: 'auto',
      margin:'5px',
      width: '50vh',
    }}>{answerKey.comment_text}</AppContainer>
    <AppContainer style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '6vh',
    }}>
    <AppButton style ={{
      width: 'auto',
    }}
    onClick ={() => setAnswerKey(0)}>X</AppButton>
    </AppContainer>
    </AppContainer>
    : <div></div>
  }
    <div style ={{
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      height:'auto',
    }}>

    <AppContainer style ={{
      width: '85vw',
      height:'auto',
      margin: '5px',
      justifyContent: 'center',
    }}>

    <AppInput
    value = {messageText}
    placeholder ='Напишите текст'
    onChange={(e) => setMessageText(e.target.value)}/>
    </AppContainer>
    <AppContainer style ={{

      width: '5vw',
      height:'auto',
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
    </AppContainer>
    </AppContainer>
    </div>
  );
}

export default App;
