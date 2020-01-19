import React, { Component } from 'react';
import InvoiceList from './invoiceList';

class OpenInvoices extends Component {
    state = {  }
    render() {
        return (
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <p className="card-title">Open Invoices</p>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, quibusdam eum, totam ut minus dolor eaque alias ratione repellat voluptate, libero beatae nobis facere quod. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque harum maxime quaerat quasi earum totam consectetur eius quisquam deleniti et.</p>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr className="border-top-0">
                          <th className="text-muted">Invoice</th>
                          <th className="text-muted">Customer</th>
                          <th className="text-muted">Ship</th>
                          <th className="text-muted">Best Price</th>
                          <th className="text-muted">Purchsed Price</th>
                          <th className="text-muted">Status</th>
                        </tr>
                      </thead>
                      <InvoiceList />
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default OpenInvoices;