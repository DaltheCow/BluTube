import React from 'react';
import HomeContainer from './HomeContainer';
import VideosContainer from './VideosContainer';
import AboutContainer from './AboutContainer';

class ChannelContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tab: 'videos' };
  }

  changeTab(tabVal) {
    this.setState({ tab: tabVal });
  }

  render() {
    const { tab } = this.state;
    const content = { 'home': <HomeContainer />, 'videos': <VideosContainer />, 'about' <AboutContainer /> };
    const tabComponent = content[tab];
    return (
      <div className="channel-content">
        <ul>
          {['HOME', 'VIDEOS', 'ABOUT'].map((tab, i) => {
            return (
              <li onClick={() => changeTab(tab.toLowerCase())} key={i}>{tab}</li>
            );
          })}
        </ul>

      </div>
    );
  }
}

export default ChannelContent;
