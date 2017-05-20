import React, { Component } from 'react';

import './style.css';

class Comment extends Component {
    render () {
        return (
            <div className="comment">
                <div className="comment__message">{this.props.message}</div>
                <div className="comment__footer">
                    <div className="comment__date">{this.props.date}</div>
                    <div className="comment__commenter">{this.props.commenter}</div>
                </div>
            </div>
        );
    }
}

export default Comment;
