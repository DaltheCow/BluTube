import React from 'react';
import SideBarContainer from './side_bar_container';
import Header from '../header';

class SideBar1 extends React.Component {
  render() {
    const { visible } = this.props;
    return (
      <div className={"sidebar sidebar-1" + (visible ? " sidebar-1-on" : "")}>
        <Header />
        <SideBarContainer />
      </div>
    );
  }
}

export default SideBar1;
