import React from 'react';
import HomeContainer from './home_container';
import VideosContainer from './videos_container';
import AboutContainer from './about_container';

class ChannelContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tab: 'home' };
  }

  changeTab(tabVal) {
    this.setState({ tab: tabVal });
  }

  render() {
    const { tab } = this.state;
    const content = { 'home': <HomeContainer />, 'videos': <VideosContainer />, 'about': <AboutContainer /> };
    const tabComponent = content[tab];
    return (
      <div className="channel-content">
        <ul className="channel-tabs">
          {['HOME', 'VIDEOS', 'ABOUT'].map((tab, i) => {
            return (
              <li onClick={() => this.changeTab(tab.toLowerCase())} key={i}>{tab}</li>
            );
          })}
        </ul>
        { tabComponent }
      </div>
    );
  }
}

export default ChannelContent;
