import React, { Component } from 'react';
import styles from '../style';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import axios from 'axios';
const url = 'http://localhost:3001/comments';

class CommentBox extends Component {
    state = {
        commentData: []
    }
    componentDidMount(){
        this.getData();
    }

    getData() {
        axios.get(url).then(response => {
            this.setState({
                commentData: response.data
            })
          }).catch( error => {
            console.log(error);
          }); 
    }

    formSubmittedHandler = (formData) => {
        console.log('formData: ', formData);
        axios.post(url, formData)
          .then(response => {
            this.getData();
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render() {
        
        return (
            <div style={styles.commentBox}>
                <CommentList data={this.state.commentData}/>
                <CommentForm formSubmitted={this.formSubmittedHandler}/>
            </div>
        )
    }
    
}

export default CommentBox;