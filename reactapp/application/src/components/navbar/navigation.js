import React, { Component } from 'react';
import Messages from './messages';
import Notification from './notification';
import User from './user';

class Navigation extends Component {
    state = {  }
    render() {
        return (
          <div className="horizontal-menu">
            <nav className="navbar top-navbar col-lg-12 col-12 p-0">
              <div className="container">
                <div className="navbar-menu-wrapper d-flex align-items-center">
                  <ul className="navbar-nav navbar-nav-right"> 
                    <Messages />
                    <Notification />
                    <User />
                  </ul>
                  <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                  <span className="mdi mdi-menu"></span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        );
    }
}

export default Navigation;