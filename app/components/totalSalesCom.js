import React, { Component } from 'react';
import Info from '../images/svgs/info2.svg';

export default class TotalSales extends Component {
  render() {
    return (
      <div className="flex mb-4 totalSalesContainer">
        <div className="totalOrders">
          <div className="totalSalesIcon">
            <img className="doughnutComIcon" src={Info} />
          </div>
          <h2 style={{ padding: "20px" }}>Total <br />Orders </h2>
          <div>
            <table >
              <tr >
                <th ></th>
                <th className=" textcolorgreen totalSalesPerText">86%</th>
              </tr>
              <tr >
                <th className=" text-5xl totalSalesNumber">25</th>
                <th className="halfwidth">
                  <table>
                    <tr className="totalSalesBars">
                      <th className="barChart"><div className="vgreenbar1"></div></th>
                      <th className="barChart"><div className="vgreenbar2"></div></th>
                      <th className="barChart"><div className="vgreenbar3"></div></th>
                    </tr>
                  </table>
                </th>
              </tr>
              <tr >
                <th ><p className="totalSalesOredersText">ORDERS</p></th>
                <th ><p className="totalSalesGrowthText">order growth</p></th>
              </tr>
            </table>
          </div>
        </div>

        <div className="totalOrders">
          <div className="totalSalesIcon">
            <img className="doughnutComIcon" src={Info} />
          </div>
          <h2 style={{ padding: "20px" }}>Total <br />Customers </h2>
          <div>
            <table >
              <tr >
                <th ></th>
                <th className=" textcolorgreen totalSalesPerText">86%</th>
              </tr>
              <tr >
                <th className=" text-5xl totalSalesNumber">25</th>
                <th className="halfwidth">
                  <table>
                    <tr className="totalSalesBars">
                      <th className="barChart"><div className="vgreenbar1"></div></th>
                      <th className="barChart"><div className="vgreenbar2"></div></th>
                      <th className="barChart"><div className="vgreenbar3"></div></th>
                    </tr>
                  </table>
                </th>
              </tr>
              <tr >
                <th ><p className="totalSalesOredersText">CUSTOMERS</p></th>
                <th ><p className="totalSalesGrowthText">cust. growth</p></th>
              </tr>
            </table>
          </div>
        </div>
        <div className="totalOrders">
          <div className="totalSalesIcon">
            <img className="doughnutComIcon" src={Info} />
          </div>
          <h2 style={{ padding: "20px" }}>Average Order <br />Value</h2>
          <div>
            <table >
              <tr >
                <th ></th>
                <th className=" textcolorred totalSalesPerText">86%</th>
              </tr>
              <tr >
                <th className=" text-5xl totalSalesAvarageNumber"> <span className="totalSalesAvarageNumberSpan">$</span>25</th>
                <th className="halfwidth">

                <table>
                        <tr className="totalSalesBars">
                          <th className="barChart"><div className="vredbar1"></div></th>
                          <th className="barChart"><div className="vredbar2"></div></th>
                          <th className="barChart"><div className="vredbar3"></div></th>
                        </tr>
                      </table>
                </th>
              </tr>
              <tr >
                <th ><p className="totalSalesOredersText">ORDERS</p></th>
                <th ><p className="totalSalesGrowthText">a.0.decline</p></th>
              </tr>
            </table>
          </div>
        </div>
        <div className="totalOrders">
          <div className="totalSalesIcon">
            <img className="doughnutComIcon" src={Info} />
          </div>
          <h2 style={{ padding: "20px" }}>Average Order <br />Value</h2>
          <div style={{ marginTop: "84px"}}>
            <table>
              <tr>
                <th className=" text-5xl totalSalesAvarageNumber"> <span className="totalSalesAvarageNumberSpan">$</span>25</th>
              </tr>
              <tr>
                <th ><p className="totalSalesOredersText">MEASURED OVER <br/>10 YEARS</p></th>
              </tr>
            </table>
          </div>
        </div>
    
      </div>
    );
  }
}