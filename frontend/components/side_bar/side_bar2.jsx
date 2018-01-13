import React from 'react';
import SideBarContainer from './side_bar_container';

class SideBar2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { visible } = this.props;
    return (
      visible ? (
        <div style={{minWidth: '240px', maxWidth: '240px', height: '100vh', background: 'gray'}}>
          <SideBarContainer />
        </div>
      ) : <div></div>
    );
  }
}

export default SideBar2;
