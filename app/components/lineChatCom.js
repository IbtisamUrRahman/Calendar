import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './../containers/Dashboard/CSS/Dashboard.css';
import Info from '../images/svgs/info2.svg';

var  data = {
    labels: ['FEB17', '', '', '', '', '','','','','','','','','', 'FEB 28'],    
    datasets: [
      {
        label: '',        
        borderDashOffset:50,    
        fill: false,      
        lineTension: 0.1,
        backgroundColor: '#ffffff',
        borderColor: '#3F89FB',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#3F89FB',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 6,
        pointHoverRadius: 2,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,      
        data: [30,75,60,112,87,75,83,76,80,63,82,130,82,83,81],          
      }    
    ],
  };

export default class LineChat extends Component {
    render(){
        return(
            <div className="flex mb-4 totalSalesContainer">
            <div className="w-1/3 h-12 totalFontsize">
              <h2 style={{fontSize:30}}>Total Sales</h2>
              <h1 style={{fontSize:60}}>$666.25</h1>
              <p className= "storeText" >Winerack sales over February 17 ~ March 19</p>
            </div>
            <div className="w-full h-12 bg-white chartContainer">
            <div style={{ marginTop: "20px", marginLeft: "56%"}}>
      <img  className="converstionRateIcon" src={Info} />
        </div>
              <div className="chartData">
                <Line data={data}/>
              </div>  
                             
            </div>
          </div>
        ); 
    }
}