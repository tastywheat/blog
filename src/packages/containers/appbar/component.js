import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom'

import './style.css';

class Appbar extends Component {
  render() {
    return (
        <div className="appbar">
            <div className="appbar__blog-name">
                DIGITAL NOMARD
            </div>

            <div className="appbar__blog-nav">
                <div className="appbar__left">
                    <ul className="appbar__menu">
                        <li className="appbar__menu-item"><Link to="/">HOME</Link></li>
                        <li className="appbar__menu-item"><Link to="/blog">BLOG</Link></li>
                        <li className="appbar__menu-item"><Link to="/blog/new">CREATE BLOG</Link></li>
                        <li className="appbar__menu-item"><Link to="/photos">PHOTOS</Link></li>
                        <li className="appbar__menu-item"><Link to="/about">ABOUT</Link></li>
                    </ul>
                </div> 
                <div className="appbar__right">
                    
                        <input className="appbar__search" type="text" placeholder="Search"/>
                    
                </div>
            </div>

        </div>
    );
  }
}

export default Appbar;
