import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './style.css';
import Home from '../../pages/home/component';
import About from '../../pages/about/component';
import Sidebar from '../../containers/sidebar/component';
import Appbar from '../../containers/appbar/component';
import LiveChat from '../../containers/live-chat/component';
import ArticleDetail from '../../pages/article-detail/component';
import App from '../../pages/movies/component';
import TodoList from '../../pages/todo/component';
import BlogNew from '../../pages/blog-new/component';

class Root extends Component {
  render() {
    return (
        <Router>
            <div className="root">
                <div className="root__appbar">
                    <Appbar />
                </div>
                <div className="root__sidebar">
                    <Sidebar />
                </div>

                <div className="root__main">
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/blog/new" component={BlogNew}/>
                    <Route path="/movies" component={App}/>
                    <Route path="/todo" component={TodoList}/>
                    <Route path="/articles/:title" component={ArticleDetail} />
                </div>

                <LiveChat />
            </div>
        </Router>
    );
  }
}

export default Root;
