import React, { Component } from 'react';
import styles from '../style';

class CommentForm extends Component {
    state = {
        author: '',
        text: ''
    };
    onAuthorNameChange = (e) => {
        this.setState({
            author: e.target.value
        });
    }
    onTextValueChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }
    onCommentPost = (e) => {
        this.props.formSubmitted(this.state);
    }
    render() {
        return (
            <form style={styles.commentForm} onSubmit={this.onCommentPost}>
                <input
                type="text" 
                placeholder="Enter Author Name" 
                value={this.state.author} 
                onChange={this.onAuthorNameChange}
                style={styles.commentFormAuthor}/>
                <input
                type="text" 
                placeholder="Enter Comment Text" 
                value={this.state.text} 
                onChange={this.onTextValueChange}
                style={styles.commentFormText}/>
                <input type="submit" style={styles.commentFormPost} value="Post"/>
            </form>
        )
    }
}

export default CommentForm;