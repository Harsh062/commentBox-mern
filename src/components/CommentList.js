import React from 'react';
import styles from '../style'; 

import Comment from './Comment';

const CommentList = (props) => {
    let commentsArr = props.data.map((comment) => {
        return <Comment author={comment.author} text={comment.text} key={comment.id} id={comment.id}/>
    })
    return (
        <div style={styles.commentList}>
            <h1>CommentList Component!</h1>
            {commentsArr}
        </div>
    )
}

export default CommentList;