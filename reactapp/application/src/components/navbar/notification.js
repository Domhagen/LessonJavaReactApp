import React, { Component } from 'react';

class Notification extends Component {
    state = {  }
    render() {
        return (
            <li className="nav-item dropdown mr-4">
                <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
                    <i className="mdi mdi-bell mx-0"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                    <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                            <div className="preview-icon bg-success">
                                <i className="mdi mdi-information mx-0"></i>
                            </div>
                        </div>
                        <div className="preview-item-content">
                            <h6 className="preview-subject font-weight-normal">Application Error</h6>
                            <p className="font-weight-light small-text mb-0 text-muted">
                                Just now
                            </p>
                        </div>
                    </a>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                            <div className="preview-icon bg-warning">
                                <i className="mdi mdi-settings mx-0"></i>
                            </div>
                        </div>
                        <div className="preview-item-content">
                            <h6 className="preview-subject font-weight-normal">Settings</h6>
                            <p className="font-weight-light small-text mb-0 text-muted">
                                Private message
                            </p>
                        </div>
                    </a>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                            <div className="preview-icon bg-info">
                                <i className="mdi mdi-account-box mx-0"></i>
                            </div>
                        </div>
                        <div className="preview-item-content">
                            <h6 className="preview-subject font-weight-normal">New user registration</h6>
                            <p className="font-weight-light small-text mb-0 text-muted">
                                2 days ago
                            </p>
                        </div>
                    </a>
                </div>
            </li>
        );
    }
}

export default Notification;