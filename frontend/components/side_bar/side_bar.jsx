import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: false, needsSubRequest: true };
  }

  componentWillReceiveProps(newProps) {
    if (this.state.needsSubRequest && newProps.needsSubRequest) {
      this.setState({ needsSubRequest: false, loading: true });
      this.props.fetchSubs().then(() => this.setState({ loading: false }));
    }
  }


  render() {
    const { subs, currentUser, filter, location, receiveFilter, clearFilter, history } = this.props;
    const { loading } = this.state;
    const loader = <div className="loader"></div>;
    const hide = location !== "/";
    const selected = (filter !== "" ? filter : (location === "/" ? "home" : null));
    return (
      <div className="sidebar sidebar-on sidebar-component">
        <div className="sidebar-btns">
          <div onClick={() => {
              clearFilter();
              history.push("/");}} className={ "sidebar-btn" + (selected === "home" ? " selected" : "")} ><i className="fa fa-home"></i><span>Home</span></div>
          { hide ? null : <div onClick={() => receiveFilter("viewCount")} className={ "sidebar-btn" + (selected === "viewCount" ? " selected" : "")} ><i className="fa fa-trophy"></i><span>Most Viewed</span></div> }
          { hide ? null : <div onClick={() => receiveFilter("likes")} className={ "sidebar-btn" + (selected === "likes" ? " selected" : "")} ><i className="fa fa-thumbs-up"></i><span>Most Liked</span></div> }
          { hide ? null : <div onClick={() => receiveFilter("duration")} className={ "sidebar-btn" + (selected === "duration" ? " selected" : "")} ><i className="fa fa-hourglass-end"></i><span>Longest</span></div> }
          { hide ? null : <div onClick={() => receiveFilter("createdAtInt")} className={ "sidebar-btn" + (selected === "createdAtInt" ? " selected" : "")} ><i className="fa fa-clock-o"></i><span>Recently Added</span></div> }
        </div>
        { currentUser ? <div className="sidebar-subs-header">SUBSCRIPTIONS</div> : null }
        { loading ? loader : (
          subs.map((sub, i) => (
            <div key={i} className="sidebar-sub">
              <Link className="sidebar-sub-link" to={`/channel/${sub.id}`}>
                <div className="profile-image">
                  <img src="https://s3.amazonaws.com/blutube-dev/images/profile_image_300x200.png" />
                </div>
                <div className="sidebar-channel-name">{ sub.username }</div>
              </Link>
            </div>
          ))
        ) }
      </div>
    );
  }
}

export default SideBar;
