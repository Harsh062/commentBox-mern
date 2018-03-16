import React, { Component } from 'react';
import styles from '../style';

class CommentForm extends Component {
    state = {
        authorName: '',
        textValue: ''
    };
    onAuthorNameChange = (e) => {
        this.setState({
            authorName: e.target.value
        });
    }
    onTextValueChange = (e) => {
        this.setState({
            textValue: e.target.value
        });
    }
    onCommentPost = (e) => {
        console.log('onCommentPost state: ', this.state);
        //this.props.formSubmitted(this.state);
    }
    render() {
        return (
            <form style={styles.commentForm} onSubmit={this.onCommentPost}>
                <input
                type="text" 
                placeholder="Enter Author Name" 
                value={this.state.authorName} 
                onChange={this.onAuthorNameChange}
                style={styles.commentFormAuthor}/>
                <input
                type="text" 
                placeholder="Enter Comment Text" 
                value={this.state.textValue} 
                onChange={this.onTextValueChange}
                style={styles.commentFormText}/>
                <input type="submit" style={styles.commentFormPost} value="Post"/>
            </form>
        )
    }
}

export default CommentForm;