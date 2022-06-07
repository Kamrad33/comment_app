import React, {useState} from 'react';
import CommentItem from './CommentItem'
import AppButton from './UI/button/AppButton'

const CommentList = ({comments, idKey, answerKey}) => {

const [rootLimit, setRootLimit] = useState(2);
const filtredList = comments.filter(comment => comment.message_root == idKey);

function upRootLimit() {
  if (filtredList.length > rootLimit){
  setRootLimit(filtredList.length);
};
}

const ansM =(id) =>{
  console.log('xue', id);
  answerKey(id);
}
  return(
    <div>
      <div style ={{
        marginLeft: '20px'
      }}>
        {comments.filter(comment => comment.message_root == idKey).slice(0, rootLimit).map(filtredComment =>(
          <CommentItem comment = {filtredComment} key={filtredComment.id} answer = {ansM}/>
        ))
        }

      { filtredList.length > rootLimit
        ? <AppButton onClick={upRootLimit}>Показать больше</AppButton>
      : <div></div>}
      </div>
    </div>
  )
};

export default CommentList;
