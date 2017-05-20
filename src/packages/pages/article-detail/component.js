import React, { Component } from 'react';

import './style.css';

import Comment from '../../widgets/comment/component';

class ArticleDetail extends Component {
    render() {
        return (
            <div className="article-detail">
                <div className="article-detail__title">
                    Chorong
                </div>
                <div className="article-detail__main-image">
                    <img src="https://cdn105.picsart.com/204083621002202.png?r480x480" alt="" />
                </div>
                <div className="article-detail__body">
                    <p>Park Cho-rong was born in Chungcheongbuk-do, South Korea on March 3, 1991. She is a middle child, having an older and a younger sister. As a daughter of a Hapkido master and academy owner, Park was trained in the said martial art for eight years.[1] She trained from her first year in elementary school until her third year of junior high; she is a holder of a 3rd degree black belt.[2][3] During her school days, Park had attended Byungsul Kindergarten, Bukang Elementary School, Bukang Middle High School, and Choongbook High School.</p>

                <p>Park auditioned for JYP Entertainment fifth official audition in 2009 where she successfully made it to the final round.[4] However, she was eventually eliminated and would later join Cube Entertainment as a trainee.</p>
                </div>
                <div className="article-detail__publish-date">
                    May 19, 2017
                </div>
                <div className="article-detail__comments">
                    <h3>Comments</h3>

                    <Comment
                        message="Hi my name is chorong"
                        date="May 20, 2017"
                        commenter="Chorong"
                    />
                </div>
            </div>
        );
    }
}


export default ArticleDetail;
