import React, { Component } from 'react';
import TotalSales from '../../components/totalSalesCom';
import ConverRate from '../../components/conversionRateCom';
import DoughnutCom from '../../components/doughnutCom';
import LineChart from '../../components/lineChatCom';
import WebAnalytics from '../../components/webAnalytics'; 
import Sessions from '../../components/sessionCom'; 
import './CSS/Overview.css'; 

export default class Overview extends Component {
  render() {
    return (
      <div className="row">
        <LineChart/>
        <TotalSales/>
        <ConverRate/>
        <DoughnutCom/>
        <div>
          <h2 className="webAnalyticsText">Web Analytics</h2>
          </div>
          <WebAnalytics/>
          <Sessions />

      </div>

    );
  }
}