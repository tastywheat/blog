import React, { Component } from 'react';

import './style.css';

class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
            <div className="sidebar__summary">
                <div className="sidebar__profile-photo-wrapper">
                    <img 
                        className="sidebar__profile-photo"
                        src="http://www.cutenessoverflow.com/wp-content/uploads/2014/02/25-This-bulldog-bully-pup-is-chasing-butterflies..jpg" 
                        alt="" 
                    />
                </div>
                <div>Chorong</div>
                <div>Toronto, Ontario</div>
                <div>Developer</div>
            </div>
            <div className="sidebar__navigation"></div>
            <div className="sidebar__chat"></div>
        </div>
    );
  }
}

export default Sidebar;
