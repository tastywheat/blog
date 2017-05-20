import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom'

import './style.css';

class Appbar extends Component {
  render() {
    return (
        <div className="appbar">
            <div className="appbar__left">
                <div className="appbar__blog-name">
                    I'm a blog
                </div>
                <ul className="appbar__menu">
                    <li className="appbar__menu-item"><Link to="/">Home</Link></li>
                    <li className="appbar__menu-item"><Link to="/blog">Blog</Link></li>
                    <li className="appbar__menu-item"><Link to="/photos">Photos</Link></li>
                    <li className="appbar__menu-item"><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div className="appbar__right">
                <div className="appbar__search">
                    <input type="text" />
                </div>
            </div>
        </div>
    );
  }
}

export default Appbar;
