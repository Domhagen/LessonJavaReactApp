import React, { Component } from 'react';

class MonthlyCards extends Component {
    state = {  }
    render() {
        return (
          <div className="row">
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card border-0 border-radius-2 bg-success">
                <div className="card-body">
                  <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                    <div className="icon-rounded-inverse-success icon-rounded-lg">
                      <i className="mdi mdi-arrow-top-right"></i>
                    </div>
                    <div className="text-white">
                      <p className="font-weight-medium mt-md-2 mt-xl-0 text-md-center text-xl-left">Total Sales</p>
                      <div className="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline align-items-md-center align-items-xl-baseline">
                        <h3 className="mb-0 mb-md-1 mb-lg-0 mr-1">$508</h3>
                        <small className="mb-0">This month</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card border-0 border-radius-2 bg-info">
                <div className="card-body">
                  <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                    <div className="icon-rounded-inverse-info icon-rounded-lg">
                      <i className="mdi mdi-basket"></i>
                    </div>
                    <div className="text-white">
                      <p className="font-weight-medium mt-md-2 mt-xl-0 text-md-center text-xl-left">Total Purchases</p>
                      <div className="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline align-items-md-center align-items-xl-baseline">
                        <h3 className="mb-0 mb-md-1 mb-lg-0 mr-1">$387</h3>
                        <small className="mb-0">This month</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card border-0 border-radius-2 bg-danger">
                <div className="card-body">
                  <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                    <div className="icon-rounded-inverse-danger icon-rounded-lg">
                      <i className="mdi mdi-chart-donut-variant"></i>
                    </div>
                    <div className="text-white">
                      <p className="font-weight-medium mt-md-2 mt-xl-0 text-md-center text-xl-left">Total Orders</p>
                      <div className="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline align-items-md-center align-items-xl-baseline">
                        <h3 className="mb-0 mb-md-1 mb-lg-0 mr-1">$161</h3>
                        <small className="mb-0">This month</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card border-0 border-radius-2 bg-warning">
                <div className="card-body">
                  <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                    <div className="icon-rounded-inverse-warning icon-rounded-lg">
                      <i className="mdi mdi-chart-multiline"></i>
                    </div>
                    <div className="text-white">
                      <p className="font-weight-medium mt-md-2 mt-xl-0 text-md-center text-xl-left">Total Growth</p>
                      <div className="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline align-items-md-center align-items-xl-baseline">
                        <h3 className="mb-0 mb-md-1 mb-lg-0 mr-1">$231</h3>
                        <small className="mb-0">This month</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default MonthlyCards;