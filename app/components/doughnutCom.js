import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Info from '../images/svgs/info2.svg';

const dataDoughnut = {
	
	datasets: [{
		data: [300, 50, 100, 150],
		backgroundColor: [
		'#3A86FF', 
		'#84CfFF',
    '#8CA8FF', 
    '#B68FFF'
		],
		hoverBackgroundColor: [
			'#3A86FF', 
		'#84CfFF',
    '#8CA8FF', 
    '#B68FFF'
		]
	}]
};

export default class DoughnutCom extends Component {
  render(){
    return(
<div className="flex mb-2 doughnutContainer " > 
<div className="w-1/2 doughnutContent">
<div className="doughnutIcon">
      <img  className="doughnutComIcon" src={Info} />
        </div>
<div className="doughnutHight">
<Doughnut data={dataDoughnut} />
</div >
<h2 className="orderByDeviceText">Orders by Device </h2>
    <table className="orderByDeviceTable">
      <tr className="text-con">
        <th className="width-1-3 ">
          <span>NAME</span>
        </th>
        <th className="width-1-3">
          <span>NUMBERS</span>
        </th>
        <th className="width-1-3">
          <span>PERSENTAGE(%)</span>
        </th>
      </tr>
      <tr className="gray-bottom-line">
        <td className="text-xl text-blue-dark ">
          <span>Desktop App</span>
        </td>
        <td className="text-xl">
          <span>15</span>
        </td>
        <td className="text-xl align-right text-blue-dark">
          <span>5.6%</span>
        </td>
      </tr>
      <tr className="gray-bottom-line ">
        <td className="text-xl text-blue-light">
          <span>Mobile App</span>
        </td>
        <td className="text-xl">
          <span>13</span>
        </td>
        <td className="text-xl align-right text-blue-light">
          <span>4.25%</span>
        </td>
      </tr>
      <tr className="gray-bottom-line">
        <td className="text-xl text-purple-lighter">
          <span>Tablet</span>
        </td>
        <td className="text-xl">
          <span>40</span>
        </td>
        <td className="text-xl align-right text-purple-lighter">
          <span>- 0%</span>
        </td>
      </tr>
      <tr>
        <td className="text-xl text-purple-light">
          <span>IOS (App)</span>
        </td>
        <td className="text-xl">
          <span>14</span>
        </td>
        <td className="text-xl align-right text-purple-light">
          <span>6.7%</span>
        </td>
      </tr>
    </table>
  </div>

  <div className="w-1/2 topProductsContent">
 
<div className="doughnutIcon">
      <img  className="doughnutComIcon" src={Info} />
        </div>
 <h2 className="topProductText">Top Products</h2>
    <table className="topProductsTable">
      <tr className="text-con">
        <th className="width-1 ">
          <span>NAME</span>
        </th>
        <th className="width-1">
          <span>DOLLARS($)</span>
        </th>
      </tr>
      <tr className="gray-bottom-line">
        <td className="text-xl">
          <span>Bodacious Smoth Red</span>
        </td>
        <td className="text-xl align-right">
          <span>$288.23</span>
        </td>
      </tr>
      <tr className="gray-bottom-line ">
        <td className="text-xl ">
          <span>Bodacious Smoth Red</span>
        </td>
        <td className="text-xl align-right ">
          <span>455.25%</span>
        </td>
      </tr>
      <tr className="gray-bottom-line">
        <td className="text-xl ">
          <span>Bodacious Smoth Red</span>
        </td>
        <td className="text-xl align-right ">
          <span>440%</span>
        </td>
      </tr>
      <tr>
        <td className="text-xl ">
          <span>Bodacious Smoth Red</span>
        </td>
        <td className="text-xl align-right ">
          <span>346.7%</span>
        </td>
      </tr>
    </table>
  </div>
  </div>
    );
  }
}
