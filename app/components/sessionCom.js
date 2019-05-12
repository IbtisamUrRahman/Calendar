import React, { Component } from 'react';
import Info from '../images/svgs/info2.svg';

export default class Sessions extends Component {
    render() {
        return (
            <div className="flex md-4 totalSalesContainer">
                <div className="w-1/2 h-12 sessionsContent">
                <div className="sessionsIcon">
      <img  className="doughnutComIcon" src={Info} />
        </div>
                    <h2 className="sessionsBySource">Sessions By Source</h2>
                    <table className="sessionsBySourceTable" >
                        <tr className="text-con">
                            <th className="width-1-5">
                                <span>NAME</span>
                            </th>
                            <th className="width-1-3 ">
                                <span>SESSIONS</span>
                            </th>
                            <th className="width-1-3">
                                <span>DIFFERENCE(%)</span>
                            </th>
                        </tr>
                        <tr className="gray-bottom-line">
                            <td className="text-xl">
                                <span>Google</span>
                            </td>
                            <td className="text-xl">
                                <span>288</span>
                            </td>
                            <td className="text-xl align-right">
                                <span></span>
                            </td>
                        </tr>
                        <tr className="gray-bottom-line">
                            <td className="text-xl">
                                <span>(Direct)</span>
                            </td>
                            <td className="text-xl">
                                <span>288</span>
                            </td>
                            <td className="text-xl align-right">
                                <span></span>
                            </td>
                        </tr>
                        <tr className="gray-bottom-line">
                            <td className="text-xl">
                                <span>Runner Subcribers</span>
                            </td>
                            <td className="text-xl">
                                <span>288</span>
                            </td>
                            <td className="text-xl align-right text-red-light">
                                <span>6.25%</span>
                            </td>
                        </tr>
                        <tr className="gray-bottom-line">
                            <td className="text-xl">
                                <span>linktr.ee</span>
                            </td>
                            <td className="text-xl">
                                <span>288</span>
                            </td>
                            <td className="text-xl align-right text-teal-light">
                                <span>- 0%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xl">
                                <span>Accounts.google.com</span>
                            </td>
                            <td className="text-xl">
                                <span>288</span>
                            </td>
                            <td className="text-xl align-right">
                                <span></span>
                            </td>
                        </tr>

                    </table>
                </div>
                <div className="w-1/2 h-12 sessionsContent">
                <div className="sessionsIcon">
      <img  className="doughnutComIcon" src={Info} />
        </div>
                    <h2 className="sessionsBySource">Top Pages</h2>
                    <table className="sessionsBySourceTable" >
                        <tr className="text-con">
                            <th className="width-1-5">
                                <span>NAME</span>
                            </th>
                            <th className="width-1-3 ">
                                <span>VIEWS</span>
                            </th>
                            <th className="width-1-3">
                                <span>DIFFERENCE(%)</span>
                            </th>
                        </tr>
                        <tr className="gray-bottom-line">
                            <td className="text-xl">
                                <span>/</span>
                            </td>
                            <td className="text-xl">
                                <span>288</span>
                            </td>
                            <td className="text-xl align-right">
                                <span>18%</span>
                            </td>
                        </tr>
                        <tr className="gray-bottom-line">
                            <td className="text-xl">
                                <span>/search</span>
                            </td>
                            <td className="text-xl">
                                <span>288</span>
                            </td>
                            <td className="text-xl align-right">
                                <span>111.11%</span>
                            </td>
                        </tr>
                        <tr className="gray-bottom-line">
                            <td className="text-xl">
                                <span>/White</span>
                            </td>
                            <td className="text-xl">
                                <span>288</span>
                            </td>
                            <td className="text-xl align-right text-red-light">
                                <span>6.25%</span>
                            </td>
                        </tr>
                        <tr className="gray-bottom-line">
                            <td className="text-xl">
                                <span>/red</span>
                            </td>
                            <td className="text-xl">
                                <span>288</span>
                            </td>
                            <td className="text-xl align-right text-teal-light">
                                <span>80%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xl">
                                <span>/checkout</span>
                            </td>
                            <td className="text-xl">
                                <span>288</span>
                            </td>
                            <td className="text-xl align-right">
                                <span>5.41%</span>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        );
    }
}
