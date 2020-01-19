import React, { Component } from 'react';

class Welcome extends Component {
    state = {  }
    render() {
        return (
            <div className="row">
            <div className="col-md-12 grid-margin">
                <div className="card bg-white">
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <h4 className="mt-1 mb-1">Hi User, Welcomeback!</h4>
                  </div>
                </div>
            </div>
          </div>
        );
    }
}

export default Welcome;