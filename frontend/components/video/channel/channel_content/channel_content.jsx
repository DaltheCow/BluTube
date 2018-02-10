import React from 'react';
import HomeContainer from './home_container';
import VideosContainer from './videos_container';
import { withRouter } from 'react-router-dom';

class ChannelContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tab: 'home' };
  }

  changeTab(tabVal) {
    this.setState({ tab: tabVal });
  }

  componentWillReceiveProps(newProps) {
    const id1 = this.props.match.params.userId;
    const id2 = newProps.match.params.userId;
    if (id1 && id2 && id1 !== id2) {
      this.setState({tab: 'home'});
    }
  }

  render() {
    const tabState = this.state.tab;
    const content = { 'home': <HomeContainer />, 'videos': <VideosContainer /> };
    const tabComponent = content[tabState];
    return (
      <div className="channel-content">
        <div className="channel-tabs-container">
          <ul className="channel-tabs">
            {['HOME', 'VIDEOS'].map((tab, i) => {
              return (
                <li className={ tab.toLowerCase() === tabState ? "selected" : "" } onClick={() => this.changeTab(tab.toLowerCase())} key={i}>{tab}</li>
              );
            })}
          </ul>
        </div>
        { tabComponent }
      </div>
    );
  }
}

export default withRouter(ChannelContent);
