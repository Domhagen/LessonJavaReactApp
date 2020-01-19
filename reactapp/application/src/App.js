import React from 'react';
import './App.css';
import Welcome from './components/welcome';
import Navigation from './components/navbar/navigation';
import Users from './components/users';
import Projects from './components/projects';
import Downloads from './components/downloads';
import TotalSales from './components/totalSales';
import MonthlyCards from './components/monthlyCards';
import Tickets from './components/ticketSection/tickets';
import Updates from './components/updates';
import Distribution from './components/distribution';
import SaleReport from './components/saleReports/saleReport';
import OpenInvoices from './components/invoice/openInvoices';
import Footer from './components/footer';

function App() {
  return (
    <div className="container-scroller">
      <Navigation />
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <Welcome />
            <div className="row">
              <div className="col-xl-6 grid-margin">
                <div className="row">
                  <Users />
                  <Projects />
                </div>
                <Downloads />
              </div>
              <TotalSales />
            </div>
          <MonthlyCards />
            <div className="row">
              <Tickets />
              <Updates />
            </div>
            <div className="row">
              <Distribution />
              <SaleReport />
            </div>
            <OpenInvoices />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;