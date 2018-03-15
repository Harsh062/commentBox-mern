import React from 'react';
import styles from '../style';

const Comment = (props) => {
    return (
        <div style={styles.comment}>
            <h1>Author: {props.author}</h1>
            <h1>Text: {props.text}</h1>
            <h1>ID: {props.id}</h1>
        </div>
    )
}

export default Comment;