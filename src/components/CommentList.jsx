import React, {useState} from 'react';
import CommentItem from './CommentItem'

const CommentList = ({comments, idKey}) => {
//console.log(idKey, 'IDIDID', comments);
  return(
    <div>
      <div style ={{
        marginLeft: '20px'
      }}>
        {comments.filter(comment => comment.message_root == idKey).map(filtredComment =>(
          <CommentItem comment = {filtredComment} key={filtredComment.id}/>
        ))
        }
      </div>
    </div>
  )
};

export default CommentList;
