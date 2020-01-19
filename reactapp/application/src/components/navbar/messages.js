import React, { Component } from 'react';

class Messages extends Component {
    state = {  }
    render() {
        return (
            <li className="nav-item dropdown mr-1">
              <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
                <i className="mdi mdi-email mx-0"></i>
              </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                  <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="https://via.placeholder.com/36x36" alt="image" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content flex-grow">
                      <h6 className="preview-subject ellipsis font-weight-normal">David Grey
                      </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        The meeting is cancelled
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="https://via.placeholder.com/36x36" alt="image" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content flex-grow">
                      <h6 className="preview-subject ellipsis font-weight-normal">Tim Cook
                      </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        New product launch
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="https://via.placeholder.com/36x36" alt="image" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content flex-grow">
                      <h6 className="preview-subject ellipsis font-weight-normal"> Johnson
                      </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        Upcoming board meeting
                      </p>
                    </div>
                  </a>
                </div>
            </li>
        );
    }
}

export default Messages;