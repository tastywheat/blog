import _ from 'lodash';
import React, { Component } from 'react';

import storage from '../../../services/storage';
import './style.css';

import Comment from '../../widgets/comment/component';

class ArticleDetail extends Component {
    render() {
        const storeState = storage.getState();
        const { title } = this.props.match.params;

        const post = _.find(storeState.posts, { title });

        return (
            <div className="article-detail">
                <div className="article-detail__title">
                    {post.title}
                </div>
                <div className="article-detail__main-image">
                    <img src={post.imageUrl} alt="" />
                </div>
                <div className="article-detail__body">
                    {post.body}
                </div>
                <div className="article-detail__publish-date">
                    May 19, 2017
                </div>
                <div className="article-detail__comments">
                    <h3>Comments</h3>

                    <Comment
                        message="Hi~ my name is chorong. I leave my message to contact with you. please message me~"
                        date="May 20, 2017"
                        commenter="Chorong"
                    />
                </div>
            </div>
        );
    }
}


export default ArticleDetail;
