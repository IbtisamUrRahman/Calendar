import React from 'react';
import  Login from '../LoginPage/index'
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div style={{ flexDirection: 'column' }}>
      <Login/>
    </div>
    );
  }
}
