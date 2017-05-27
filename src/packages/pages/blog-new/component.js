import React, { Component } from 'react';
import storage from '../../../services/storage';
import './style.css';

class BlogNew extends Component {
    state = {
        title: '',
        imageUrl: '',
        body: '',
        tag: '',
    };
    handleSubmit = (event) => {
        event.preventDefault();

        const blog = {
            title: this.state.title,
            imageUrl: this.state.imageUrl,
            body: this.state.body,
            tag: this.state.tag,
        };

        console.log('new blog', blog)
        
        this.setState({
            title: '',
            imageUrl: '',
            body: '',
            tag: '',
        });

        let storeState = storage.getState();

        storeState = {
            ...storeState,
            posts: [].concat(storeState.posts, blog).filter(p => p),
        };

        storage.setState(storeState);
    };
    updateState = (field) => {
        return (event) => {
            const text = event.target.value;
            this.setState({
                [field]: text 
            });
        };
    };
    render() {
        return (
            <div className="blog-new">
                Create a Post
                <form onSubmit={this.handleSubmit}>
                    <div className="blog-new__title-field">
                        Title:
                        <input type="text" value={this.state.title} onChange={this.updateState('title')} />
                    </div>
                    <div className="blog-new__image-url-field">
                        Image URL:
                        <input type="text" value={this.state.imageUrl} onChange={this.updateState('imageUrl')} />
                    </div>
                    <div className="blog-new__body-field">
                        Body:
                        <textarea value={this.state.body} onChange={this.updateState('body')} />
                    </div>
                    <div className="blog-new__tag-field">
                        Tag:
                        <input type="text" value={this.state.tag} onChange={this.updateState('tag')} />
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default BlogNew;
