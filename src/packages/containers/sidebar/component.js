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
                        src="https://cdn.dribbble.com/users/88761/avatars/normal/f71c29eafeb788f20de7737a508e364e.jpg?1449624419" 
                        alt="" 
                    />
                </div>
                <div className="sidebar__profile-photo">
                    <div>Lubos.Volkov</div>
                    <div>Toronto, Ontario</div>
                    <div>Developer</div>
                </div>
            </div>
            <div className="sidebar__navigation"></div>
            <div className="sidebar__chat"></div>
        </div>
    );
  }
}

export default Sidebar;
