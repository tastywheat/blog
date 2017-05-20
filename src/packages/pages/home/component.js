import React, { Component } from 'react';

import './style.css';

import ArticleSummary from '../../widgets/article-summary/component';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <ArticleSummary
                    linkTo="/articles/chorong"
                    imageUrl="https://cdn105.picsart.com/204083621002202.png?r480x480"
                    body="Park Cho-rong was born in Chungcheongbuk-do, South Korea on March 3, 1991. She is a middle child, having an older and a younger sister. As a daughter of a Hapkido master and academy owner, Park was trained in the said martial art for eight years.[1] She trained from her first year in elementary school until her third year of junior high; she is a holder of a 3rd degree black belt.[2][3] During her school days, Park had attended Byungsul Kindergarten, Bukang Elementary School, Bukang Middle High School, and Choongbook High School."
                />
                <ArticleSummary
                    linkTo="/articles/joongki"
                    imageUrl="https://0.soompi.io/wp-content/uploads/2016/03/23180713/song-joong-ki-yoo-si-jin.png"
                    body="Song Joong-ki (Hangul: 송중기; born September 19, 1985) is a South Korean actor. He rose to fame in the historical drama Sungkyunkwan Scandal (2010) and the variety show Running Man as one of the original cast members when it premiered in 2010. Song played his first TV leading role in the melodrama The Innocent Man (2012). He has also starred in feature films, notably as the title character in the box office hit A Werewolf Boy (2012).[1]"
                />
            </div>
        );
    }
}

export default Home;
