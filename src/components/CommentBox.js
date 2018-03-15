import React, { Component } from 'react';
import styles from '../style';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {
    formSubmiitedHandler = (formData) => {
        console.log('formData: ', formData);
    }
    render() {
        const dataAsProps = [{id: 1, text: "First Comment", author: "Harsh Gandhi"},
                             {id: 2, text: "Second Comment", author: "Harshvardhan Gandhi"},
                             {id: 3, text: "Third Comment", author: "Harshu Gandhi"}];
        return (
            <div style={styles.commentBox}>
                <CommentList data={dataAsProps}/>
                <CommentForm formSubmitted={this.formSubmiitedHandler}/>
            </div>
        )
    }
    
}

export default CommentBox;