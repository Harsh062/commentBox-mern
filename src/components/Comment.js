import React, { Component } from 'react';
import styles from '../style';

class Comment extends Component{
    state = {
        author: '',
        text: '',
        toBeUpdated: false
    };

    updateComment = () => {
        let toBeUpdated = !this.state.toBeUpdated;
        this.setState({
            toBeUpdated: toBeUpdated
        })
    }

    handleAuthorChange = (e) => {
        this.setState({
            author: e.target.value
        })
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCommentUpdate = () => {
        console.log(`this.state.author: ${this.state.author}`)
        let author = this.state.author.trim();
        let text = this.state.text.trim();

        if (!author || !text) {
            return;
        }

        let updatedComment = {
            author: author,
            text: text
        }
        this.props.onCommentUpdate(this.props.uniqueId, updatedComment);
        this.setState({
            toBeUpdated: !this.state.toBeUpdated
        })
    }

    render(){

        return (
            <div style={styles.comment}>
                <h3>{this.props.author}</h3>
                <h1>{this.props.text}</h1>
                <a style={ styles.updateLink } href='#' onClick={ this.updateComment }>update</a>
                <a style={ styles.deleteLink } href='#' onClick={ this.deleteComment }>delete</a>
                { (this.state.toBeUpdated)
          ? (<form onSubmit={ this.handleCommentUpdate }>
              <input
                type='text'
                placeholder='Update name'
                style={ styles.commentFormAuthor }
                value={ this.state.author }
                onChange={ this.handleAuthorChange } />
              <input
                type='text'
                placeholder='Update your commen'
                style={ styles.commentFormText }
                value={ this.state.text }
                onChange={ this.handleTextChange } />
              <input
                type='submit'
                style={ styles.commentFormPost }
                value='Update' />
            </form>)
          : null}
            </div>
        )
    }
    
}

export default Comment;