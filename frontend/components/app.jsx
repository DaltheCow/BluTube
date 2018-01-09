import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Redirect, Link, Route, withRouter, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, ProtectedVideoRoute } from '../util/route_util';
import VideoFormContainer from './video/video_form_container';
import VideoShowContainer from './video/video_show/video_show_container';
import VideoIndexContainer from './video/video_index/video_index_container';
import Results from './video/video_search_results';

//with overlay
import SideBar1 from './side_bar/side_bar1';
//without overlay
import SideBar2 from './side_bar/side_bar2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateWindowSize = () =>  this.updateWindowSize();
    this.state = { isSidebarOverlay: window.innerWidth < 1000 };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowSize);
  }

  updateWindowSize() {

    //here do the check to see if you need to open the sidebar

    this.setState({isSidebarOverlay: window.innerWidth <= 1000});
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }

  render() {
    const { sidebarState, location } = this.props;
    const { isSidebarOverlay } = this.state;
    const notSessionPath = !['/login', '/signup'].includes(location.pathname);
    const notVideoPath = !['/videos/'].includes(location.pathname);
    const mainContent = (
      <Switch>
        <Route exact path="/videos/:videoId" component={ VideoShowContainer } />
        <Route exact path="/" component={ VideoIndexContainer } />
        <Route exact path="/results" component={ Results } />
        <AuthRoute exact path="/login" component={ SessionFormContainer } />
        <AuthRoute exact path="/signup" component={ SessionFormContainer } />
        <ProtectedRoute exact path="/upload" component={ VideoFormContainer } />
        <ProtectedVideoRoute exact path="/upload/:videoId/edit" component={ VideoFormContainer } />
        <Route path="/" render={() => <Redirect to="/" />} />
      </Switch>
    );



    return (
      <div>
        {notSessionPath ? (
          <header>
            <div className="under-nav"></div>
            <Route path="/" component={ NavBarContainer } />
          </header>
        ) : (null)}

        <Route path="/videos/:videoId" component={ SideBar1 } />
        <Route path="/videos/:videoId" render={() => mainContent} />

        {notVideoPath && isSidebarOverlay ? (<SideBar1 />) : (null)}
        {notVideoPath && isSidebarOverlay ? { mainContent } : (null)}
        {notVideoPath && !isSidebarOverlay ? (
          <div>
            <SideBar2 />
            { mainContent }
          </div>
        ) : (null)}
      </div>
    );
  }
}

export default withRouter(App);
