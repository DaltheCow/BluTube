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
    this.onWindowResize = this.onWindowResize.bind(this);
    this.state = { isOverlaySize: window.innerWidth < 1277 };
  }

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
  }

  onWindowResize() {
    const { location, sidebarResponse, windowResize, sidebarToggle } = this.props;
    const { isOverlaySize } = this.state;

    if (!location.pathname.includes('/videos/')) {
      if (window.innerWidth >= 1277) {
        // debugger
      }
      if (window.innerWidth < 1277 && !isOverlaySize) {
        windowResize('shrink');
      } else if (window.innerWidth >= 1277 && isOverlaySize) {
        windowResize('widen');
      }
    }
    this.setState({isOverlaySize: window.innerWidth < 1277});
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }

  render() {
    const { sidebarState, location, sidebarType } = this.props;
    const notSessionPath = !['/login', '/signup'].includes(location.pathname);
    const notVideoPath = !location.pathname.includes('/videos/');
    // debugger
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

        <Route path="/videos/:videoId" render={() => <SideBar1 visible={ sidebarState } />} />
        <Route path="/videos/:videoId" render={() => mainContent} />

        {notVideoPath && sidebarType === 'overlay' ? (<SideBar1 visible={ sidebarState } />) : (null)}
        {notVideoPath && sidebarType === 'overlay' ? mainContent : (null)}
        {notVideoPath && sidebarType === 'flex' ? (
          <div className="with-side-bar-flexed">
            <SideBar2 visible={ sidebarState } />
            { mainContent }
          </div>
        ) : (null)}
      </div>
    );
  }
}

export default withRouter(App);
