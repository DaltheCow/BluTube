import React from 'react';
import SideBarContainer from './side_bar_container';

class SideBar1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { visible } = this.props;
    return (
      visible ? (
        <div style={{minWidth: '240px', maxWidth: '240px', height: '100vh', background: 'gray', position: 'fixed', top: 0, left: 0, zIndex: 2000 }}>
          <SideBarContainer />
        </div>
      ) : <div></div>
    );
  }
}

export default SideBar1;
