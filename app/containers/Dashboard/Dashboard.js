import React, { Component } from 'react';
import './CSS/Dashboard.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import ChartBarImg from '../../images/barChart.png';
import { NavLink, Route } from 'react-router-dom';
import Overview from './Overview';
// import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { DateRangePicker } from 'react-date-range';
import DashboardLog from '../../images/logo.png';
import Products from './Products';
import Categories from './Categories';
import Section from './Section';
import { format, addDays } from 'date-fns';
import { Row, Col } from 'antd';

// import 'normalize.css';
// import './CSS/global.css';
import './CSS/main.css';

// @import '@wojtekmaj/react-daterange-picker/src/DateRangePicker.less';
// import '../../../src/styles.scss';
// import '../../../src/theme/default.scss';

function formatDateDisplay(date, defaultText) {
  if (!date) return defaultText;
  return format(date, 'MM/DD/YYYY');
}

const DashBoardContainer = ({ match }) => {
  var temp = match.params.title;
  return (
    <div className="flex mb-4 dashboardContent">
      {(function() {
        switch (temp) {
          case 'Overview':
            return (
              <h1>
                {temp}
                <Overview name={temp} />
              </h1>
            );
          case 'Products':
            return (
              <h1>
                {temp}
                <Products name={temp} />
              </h1>
            );
          case 'Categories':
            return (
              <h1>
                {temp}
                <Categories name={temp} />
              </h1>
            );
          default:
            return (
              <h1>
                {temp}
                <Categories name={temp} />
              </h1>
            );
        }
      })()}
    </div>
  );
};

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [new Date(), new Date()],
      showCalendar: false,
      dateRange: {
        selection: {
          startDate: new Date(),
          endDate: null,
          key: 'selection',
        },
      },
      dateRangePicker: {
        selection: {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection',
        },
      },
    };
  }

  onChange = date => {
    this.setState({ date });
    // console.log(date);
  };
  toggleCalendar = e => {
    e.preventDefault();
    this.setState({ showCalendar: !this.state.showCalendar });
    // console.log(date);
  };

  handleRangeChange(which, payload) {
    console.log(which, payload);
    this.setState({
      [which]: {
        ...this.state[which],
        ...payload,
      },
    });
  }

  render() {
    console.log(this.state.dateRange);
    return (
      <div className=".container dashboardbackgroundColor">
        <div className="flex mb-4">
          <div className="w-1/7 h-12 dashboardsidebar">
            <div className="w-1/7 h-12 dashboardLog">
              <img src={DashboardLog} />
            </div>
            <NavLink
              exact
              to="/dashboard/Overview"
              className="item sideBarPos"
              activeClassName="active"
            >
              <img src={ChartBarImg} className="charBar" />
            </NavLink>
            <NavLink
              to="/dashboard/Products"
              className="item sidebarOptPadding"
              activeClassName="active"
            >
              {/* <img src={ChartBarImg} className="charBar" /> */}
              <i className="fas fa-cube" />
            </NavLink>
            <NavLink
              to="/dashboard/Categories"
              className="item sidebarOptPadding"
              activeClassName="active"
            >
              {/* <img src={ChartBarImg} className="charBar" /> */}
              <i className="fas fa-tags" />
            </NavLink>
          </div>
          <div className="w-full h-12 dasboardcontainer">
            <div className="flex bg-white w-full mb-4 headerBar">
              <div className="w-1/2 h-12" />
              <div className="w-1/2 h-12 mb-4 flex">
                <div className=" w-1/2 h-12 compareTo">
                  <div class="flex flex-row ">
                    <div class="text-grey-darker text-center m-1 compareTo">
                      Compared to :
                    </div>
                  </div>
                  <div class="flex flex-row ">
                    <div class="text-grey-darker text-center ">Jan 01 2019</div>
                    <div class="text-grey-darker text-center px-1 ">-</div>
                    <div class="text-grey-darker text-center  ">
                      Feb 01 2019
                    </div>
                  </div>
                  {/* <p>Compared to:</p>
                                    <p>Jan 01 2019 - Feb 01 2019</p> */}
                </div>
                <div className="w-1/2 h-12 calenderPos">
                  <div className="calendarDiv" style={{ padding: '10px' }}>
                    <i
                      className="far fa-calendar"
                      style={{ marginRight: '15px' }}
                    />
                    <form style={{ display: 'inline' }}>
                      <input
                        type="text"
                        readOnly
                        value={
                          formatDateDisplay(
                            this.state.dateRangePicker.selection.startDate,
                          ) +
                          ' ' +
                          formatDateDisplay(
                            this.state.dateRangePicker.selection.endDate,
                          )
                        }
                      />
                    </form>
                    {this.state.showCalendar ? (
                      <div className={'calendar-right'}>
                        <DateRangePicker
                          onChange={this.handleRangeChange.bind(
                            this,
                            'dateRangePicker',
                          )}
                          showSelectionPreview={true}
                          moveRangeOnFirstSelection={true}
                          className={'PreviewArea'}
                          months={2}
                          ranges={[this.state.dateRangePicker.selection]}
                          direction="horizontal"
                        />
                      </div>
                    ) : null}
                    {this.state.showCalendar ? (
                      <i
                        className="fas fa-angle-down"
                        onClick={this.toggleCalendar}
                      />
                    ) : (
                      <i
                        className="fas fa-angle-up"
                        onClick={this.toggleCalendar}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Route path="/dashboard/:title" component={DashBoardContainer} />
          </div>
        </div>
      </div>
    );
  }
}
