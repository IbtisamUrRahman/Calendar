import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './CSS/Categories.css';
import { Pagination } from 'antd';
export default class Categories extends Component {
  render() {
    return (
      <>
        <div>
          <div className="categoriesTable">
            <table>
              <tr className="text-xl">
                <th className="categoriesRow">
                  <span>CATEGORY</span>
                </th>
                <th className="unitsRow">
                  <span>UNITS</span>
                </th>
                <th className="patnerSalesRow">
                  <span>PATNERSALES</span>
                </th>
                <th className="runneSalesRow">
                  <span>RUNNERSALES</span>
                </th>
                <th className="categoriesPreRow">
                  <span>CATEGORY(%)</span>
                </th>
              </tr>
              <tr className="black-bottom-line">
                <td className="text-xl text-blue-light">
                  <span>Wine</span>
                </td>
                <td className="text-xl text-blue-light textRight">
                  <span >39</span>
                </td>
                <td className="text-xl text-blue-light textRight">
                  <span>$610.65</span>
                </td>
                <td className="text-xl text-blue-light textRight">
                  <span>$52,701,22</span>
                </td>
                <td className="text-xl text-blue-light textRight">
                  <span>1.16%</span>
                </td>
              </tr>
              <tr className="black-bottom-line">
                <td className="text-xl">
                  <span className="spanLeft">Icewine</span>
                </td>
                <td className="text-xl textRight">
                  <span>-</span>
                </td>
                <td className="text-xl textRight">
                  <span>-</span>
                </td>
                <td className="text-xl textRight">
                  <span>$49.95</span>
                </td>
                <td className="text-xl textRight">
                  <span>-</span>
                </td>
              </tr>
              <tr className="black-bottom-line">
                <td className="text-xl">
                  <span className="spanLeft">Sparkingling Wine</span>
                </td>
                <td className="text-xl textRight">
                  <span>2</span>
                </td>
                <td className="text-xl textRight">
                  <span>$25.90</span>
                </td>
                <td className="text-xl textRight">
                  <span>$4,487.72</span>
                </td>
                <td className="text-xl textRight">
                  <span>6.25%</span>
                </td>
              </tr>
              <tr className="black-bottom-line">
                <td className="text-xl text-blue-light">
                  <span>Beer & Cider</span>
                </td>
                <td className="text-xl text-blue-light textRight">
                  <span>6</span>
                </td>
                <td className="text-xl text-blue-light textRight">
                  <span>$27.70</span>
                </td>
                <td className="text-xl text-blue-light textRight">
                  <span>$2,967.63</span>
                </td>
                <td className="text-xl  text-blue-light textRight">
                  <span>0.93%</span>
                </td>
              </tr>
              <tr className="black-bottom-line">
                <td className="text-xl">
                  <span className="spanLeft">Cider</span>
                </td>
                <td className="text-xl textRight">
                  <span>6</span>
                </td>
                <td className="text-xl textRight ">
                  <span>$27.70</span>
                </td>
                <td className="text-xl textRight">
                  <span>$2,967.63</span>
                </td>
                <td className="text-xl textRight">
                  <span>0.93%</span>
                </td>
              </tr>
              <tr className="black-bottom-line">
                <td className="text-xl text-blue-light">
                  <span>Spirits</span>
                </td>
                <td className="text-xl text-blue-light textRight">
                  <span>-</span>
                </td>
                <td className="text-xl text-blue-light textRight">
                  <span>-</span>
                </td>
                <td className="text-xl text-blue-light textRight">
                  <span>$1,682.64</span>
                </td>
                <td className="text-xl text-blue-light textRight">
                  <span>-</span>
                </td>
              </tr>
              <tr>
                <td className="text-xl">
                  <span className="spanLeft">Liqueur/Liquor</span>
                </td>
                <td className="text-xl textRight">
                  <span>-</span>
                </td>
                <td className="text-xl textRight ">
                  <span>11</span>
                </td>
                <td className="text-xl textRight ">
                  <span>$2,578.91</span>
                </td>
                <td className="text-xl textRight">
                  <span>2.56%</span>
                </td>
              </tr>
            </table>
          </div>
          <div className="pagination">
          <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </>
    );
  }
}
