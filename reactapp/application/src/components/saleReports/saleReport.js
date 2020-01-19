import React, { Component } from 'react';
import SaleReportOverview from './saleReportOverview';

class SaleReport extends Component {
    state = {  }
    render() {
        return (
            <div className="col-xl-9 grid-margin stretch-card">
              <div className="card">
                <div className="row">
                  <div className="col-md-7 col-lg-6 col-xl-7">
                    <div className="card-body h-100 d-flex flex-column">
                      <p className="card-title">Sale report</p>
                      <p className="text-muted mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id beatae sint dolorum quod ducimus quisquam ut minima atque quaerat.</p>
                      <canvas id="sale-report-chart"></canvas>
                    </div>
                  </div>
                  <SaleReportOverview />
                </div>
              </div>
            </div>
        );
    }
}

export default SaleReport;