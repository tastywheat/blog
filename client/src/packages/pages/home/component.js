import _ from 'lodash';
import React, { Component } from 'react';
import storage from '../../../services/storage';
import './style.css';

import ArticleSummary from '../../widgets/article-summary/component';

class Home extends Component {
    render() {
        const storeState = storage.getState();
        return (
            <div className="home">
                {_.map(storeState.posts, post => (
                    <ArticleSummary
                        key={post.title}
                        linkTo={`/articles/${post.title}`}
                        title={post.title}
                        imageUrl={post.imageUrl}
                        body={post.body}
                    />
                ))}
                {/*
                <ArticleSummary
                    linkTo="/articles/chorong"
                    imageUrl="https://cdn.dribbble.com/users/88761/screenshots/2188026/dribbble_shot.png"
                    body="It's time to get back on the track! 
                    And let's start with a cool project I recently completed with Humdinger and Sons :)"
                />
                <ArticleSummary
                    linkTo="/articles/joongki"
                    imageUrl="https://0.soompi.io/wp-content/uploads/2016/03/23180713/song-joong-ki-yoo-si-jin.png"
                    body="Song Joong-ki (Hangul: 송중기; born September 19, 1985) is a South Korean actor. He rose to fame in the historical drama Sungkyunkwan Scandal (2010) and the variety show Running Man as one of the original cast members when it premiered in 2010. Song played his first TV leading role in the melodrama The Innocent Man (2012). He has also starred in feature films, notably as the title character in the box office hit A Werewolf Boy (2012).[1]"
                />
                */}
            </div>
        );
    }
}

export default Home;
