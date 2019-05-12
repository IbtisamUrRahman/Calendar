import React, { Component } from 'react';
import Info from '../images/svgs/info2.svg';

export default class WebAnalytics extends Component {
    render() {
        return (
            <div className="flex md-4 totalSalesContainer">
                <div className="totalStoreVits">
                    <div>
                        <img className="storeVistsIcon" src={Info} />
                    </div>
                    <h2 className="totalStoreVistsText">Total Store Vists</h2>
                    <div>
                        <table >
                            <tr >
                                <th></th>
                                <th className=" textcolorgreen storeVistsPer">86%</th>
                            </tr>
                            <tr >
                                <th className="text-5xl font-thin">374</th>
                                <th>
                                    <table>
                                        <tr className="totalStoreBars">
                                            <th className="barChart"><div className="vgreenbar1"></div></th>
                                            <th className="barChart"><div className="vgreenbar2"></div></th>
                                            <th className="barChart"><div className="vgreenbar3"></div></th>
                                        </tr>
                                    </table>
                                </th>
                            </tr>
                            <tr >
                                <th ><p className="storeVistsText">VISTS</p></th>
                                <th ><p className="storeVistsGrowth center">Vists growth</p></th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="totalStoreVits">
                    <div>
                        <img className="storeVistsIcon" src={Info} />
                    </div>
                    <h2 className="totalStoreVistsText">Total Page Views</h2>
                    <div>
                        <table >
                            <tr >
                                <th></th>
                                <th className=" textcolorgreen storeVistsPer">86%</th>
                            </tr>
                            <tr >
                                <th className="text-5xl font-thin">374</th>
                                <th>
                                    <table>
                                        <tr className="totalStoreBars">
                                            <th className="barChart"><div className="vgreenbar1"></div></th>
                                            <th className="barChart"><div className="vgreenbar2"></div></th>
                                            <th className="barChart"><div className="vgreenbar3"></div></th>
                                        </tr>
                                    </table>
                                </th>
                            </tr>
                            <tr >
                                <th ><p className="storeVistsText">VIEWS</p></th>
                                <th ><p className="storeVistsGrowth center">Page view growth</p></th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="totalStoreVits">
                    <div>
                        <img className="storeVistsIcon" src={Info} />
                    </div>
                    <h2 className="totalStoreVistsText">Total Users</h2>
                    <div>
                        <table >
                            <tr >
                                <th></th>
                                <th className=" textcolorgreen storeVistsPer">86%</th>
                            </tr>
                            <tr >
                                <th className="text-5xl font-thin">374</th>
                                <th>
                                    <table>
                                        <tr className="totalStoreBars">
                                            <th className="barChart"><div className="vgreenbar1"></div></th>
                                            <th className="barChart"><div className="vgreenbar2"></div></th>
                                            <th className="barChart"><div className="vgreenbar3"></div></th>
                                        </tr>
                                    </table>
                                </th>
                            </tr>
                            <tr >
                                <th ><p className="storeVistsText">USERS</p></th>
                                <th><p className="storeVistsGrowth center">user growth</p></th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
