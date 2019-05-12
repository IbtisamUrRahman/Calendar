import React, { Component } from 'react';
import Info from '../images/svgs/info2.svg';
export default class Conversion extends Component {
    render(){
        return(
<div className="flex mb-4 converRateContainer convertRateHeight">
<div className="w-1/3 h-12 converRateContent" style={{ }}>
<div>
      <img  className="converstionRateIcon" src={Info} />
        </div>
  <h2 style={{fontSize:"25px"}}>Conversation Rate</h2>

  <div className="flex mb-4 conversationRate">
    <div className="w-1/2 h-12 rateBlueColor">
      <h2 style={{position: "absolute", marginLeft:"20px", fontSize: "60px",}}><span style={{ position: "absolute", fontSize: "30px", marginLeft: "-20px", marginTop: "10px" }}>%</span>2.41</h2>
    </div>
    <div className="w-1/2 h-12 rateRedColor">
      <p>6.25%</p>
    </div>
  </div>
  <table style={{marginTop:"-10px"}} className="conversationtableview">
    <tr className="text-con">
      <th className="width-1-3">
        <span>NAME</span>
      </th>
      <th className="width-1-3">
        <span>NUMBERS</span>
      </th>
      <th className="width-1-3">
        <span>DIFFERENCE</span>
      </th>
    </tr>
    <tr style={{}}>
      <td style={{fontSize: 16}}>Sessions</td>
      <td><div className="chartValue">200</div><div className="chartBarBG"><div className="chartBarValue1"></div></div></td>
      <td style={{ textAlign: 'right' }}></td>
    </tr>
    <tr>
      <td style={{fontSize: 16}}>Add to carts</td>
      <td><div className="chartValue">109</div><div className="chartBarBG"><div className="chartBarValue2"></div></div></td>
      <td style={{ textAlign: 'right', color: '#FD8481' }}>6.25%</td>
    </tr>
    <tr>
      <td style={{fontSize: 16}}>Checkout</td>
      <td><div className="chartValue">100</div><div className="chartBarBG"><div className="chartBarValue3"></div></div></td>
      <td style={{ textAlign: 'right', color: '#2AD4B4' }}>6.25%</td>
    </tr>
    <tr>
      <td style={{fontSize: 16}}>Transaction</td>
      <td><div className="chartValue">9</div><div className="chartBarBG"><div className="chartBarValue4"></div></div></td>
      <td style={{ textAlign: 'right', color: '#2AD4B4' }}>6.25%</td>
    </tr>
  </table>
</div>

 <div className="w-1/3 h-12 converRateContent">
 <div>
      <img  className="converstionRateIcon" src={Info} />
        </div>
  <h2>Sales By Medium</h2>
  <span className="text-span text-grey">(Bassed on Runner Product Prices)</span>

  <table style={{marginTop: "55px"}}>
    <tr className="text-con text-grey">
      <th className="width-1-3">
        <span>NAME</span>
      </th>
      <th className="width-1-3">
        <span>DOL(S)</span>
      </th>
      <th className="width-1-3">
        <span>DIFFERENCE</span>
      </th>
    </tr>
    <tr className="gray-bottom-line">
      <td className="text-xl">
        <span>Email</span>
      </td>
      <td className="text-xl">
        <span>$288.36</span>
      </td>
      <td className="text-xl align-right">
        <span></span>
      </td>
    </tr>
    <tr className="gray-bottom-line">
      <td className="text-xl">
        <span>cpc</span>
      </td>
      <td className="text-xl">
        <span>$288.36</span>
      </td>
      <td className="text-xl align-right">
        <span></span>
      </td>
    </tr>
    <tr className="gray-bottom-line">
      <td className="text-xl">
        <span>origanic</span>
      </td>
      <td className="text-xl">
        <span>$288.36</span>
      </td>
      <td className="text-xl align-right text-red-light">
        <span>6.25%</span>
      </td>
    </tr>
    <tr className="gray-bottom-line">
      <td className="text-xl">
        <span>(none)</span>
      </td>
      <td className="text-xl">
        <span>$288.36</span>
      </td>
      <td className="text-xl align-right text-teal-light">
        <span>- 0%</span>
      </td>
    </tr>
    <tr>
      <td className="text-xl">
        <span>CPC</span>
      </td>
      <td className="text-xl">
        <span>$288.36</span>
      </td>
      <td className="text-xl align-right">
        <span></span>
      </td>
    </tr>

  </table>
</div> 


 <div className="w-1/3 h-12 converRateContent">
 <div>
      <img  className="converstionRateIcon" src={Info} />
        </div>
  <h2>Sales By Campaign</h2>
  <span className="text-span">(Bassed on Runner Product Prices)</span>

  <table style={{marginTop:"55px"}}>
    <tr className="text-con">
      <th className="width-1-5">
        <span>Name</span>
      </th>
      <th className="width-1-3">
        <span>DOL(S)</span>
      </th>
      <th className="width-1-3">
        <span>DIFFERENCE</span>
      </th>
    </tr>
    <tr className="gray-bottom-line">
      <td className="text-xl">
        <span>(not set)</span>
      </td>
      <td className="text-xl">
        <span>$288.36</span>
      </td>
      <td className="text-xl align-right text-red-light">
        <span>6.25%</span>
      </td>
    </tr>
    <tr className="gray-bottom-line">
      <td >
        <span className="compaignSpan">671077cfd0-</span>
        <br/>
        <span className="compaignSpan1">EMAIL_CAM</span>
      </td>
      <td className="text-xl">
        <span>$288.36</span>
      </td>
      <td className="text-xl align-right">
        <span></span>
      </td>
    </tr>
    <tr className="gray-bottom-line">
    <td>
        <span className="compaignSpan">671077cfd0-</span>
        <br/>
        <span className="compaignSpan1">EMAIL_CAM</span>
      </td>
      <td className="text-xl">
        <span>$288.36</span>
      </td>
      <td className="text-xl align-right text-red-light">
        <span></span>
      </td>
    </tr>
    <tr className="gray-bottom-line">
    <td>
        <span className="compaignSpan">671077cfd0-</span>
        <br/>
        <span className="compaignSpan1">EMAIL_CAM</span>
      </td>
      <td className="text-xl">
        <span>$288.36</span>
      </td>
      <td className="text-xl align-right text-teal-light">
        <span></span>
      </td>
    </tr>
    <tr>
    <td >
        <span className="compaignSpan">671077cfd0-</span>
        <br/>
        <span className="compaignSpan1">EMAIL_CAM</span>
      </td>
      <td className="text-xl">
        <span>$288.36</span>
      </td>
      <td className="text-xl align-right">
        <span></span>
      </td>
    </tr>

  </table>
</div>
</div>
);
    }
}




