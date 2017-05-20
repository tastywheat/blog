import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class ArticleSummary extends Component {
    render () {
        return (
            <div className="article-summary">
                <Link to={this.props.linkTo} className="article-summary__image-wrapper">
                    <img src={this.props.imageUrl} alt="" className="article-summary__image"/>
                </Link>
                <p className="article-summary__body">
                    {this.props.body}
                </p>
            </div>
        );
    }
}

export default ArticleSummary;
