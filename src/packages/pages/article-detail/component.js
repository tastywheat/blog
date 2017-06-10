import _ from 'lodash';
import React, { Component } from 'react';

import storage from '../../../services/storage';
import './style.css';

import Comments from '../../containers/comments/component'; 

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
                    <Comments articleId={post.title} />
                </div>
            </div>
        );
    }
}


export default ArticleDetail;
