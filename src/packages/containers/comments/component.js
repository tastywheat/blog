import _ from 'lodash';
import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom'

import storage from '../../../services/storage';
import './style.css';

import Comment from '../../widgets/comment/component';

class Comments extends Component {
    constructor (props) {
        super(props);

        const storeState = storage.getState();

        this.state = {
            commentText: '',
            comments: _.get(storeState, `comments.${this.props.articleId}`, []),
        };
    }
    addComment = () => {
        if (!this.state.commentText) {
            return;
        }

        const newComment = {
            message: this.state.commentText,
            date: new Date().toString(),
            commenter: 'brian',
        };

        const newComments = this.state.comments.concat(newComment);

        this.setState({
            comments: newComments,
            commentText: '',
        });

        let storeState = storage.getState();
        storeState = {
            ...storeState,
            comments: {
                ...storeState.comments,
                [this.props.articleId]: newComments
            }
        };
        storage.setState(storeState);
    }
    updateCommentText = (event) => {
        const text = event.target.value;

        this.setState({
            commentText: text,
        });
    }
    render() {
        return (
            <div className="comments">
                <h3>Comments</h3>
                <div className="comments__input">
                    <textarea 
                        value={this.state.commentText} 
                        onChange={this.updateCommentText}
                    />
                </div>
                <div className="comments__post">
                    <button onClick={this.addComment}>post</button>
                </div>

                <div className="comments__comment">
                    {this.state.comments.map((comment, index) => (
                        <Comment 
                            key={index}
                            message={comment.message} 
                            date={comment.date} 
                            commenter={comment.commenter} 
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Comments;
