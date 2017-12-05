import React from 'react';

import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  whenPosted(time) {
    const lapsed = Date.now() - time;
    const times = [60000, 60, 24, 7, 4, 12];
    const timeAmounts = [1,2,3,4,5,6].
      map(int => Math.floor(lapsed / times.slice(0,int).reduce((tot, time) => tot * time)));
    const index = [timeAmounts[0], timeAmounts[1], timeAmounts[2], timeAmounts[3], timeAmounts[4], timeAmounts[5]].indexOf(0);
    if (timeAmounts[5] > 0) {
      return timeAmounts[5] + ` year${timeAmounts[5] === 1 ? '' : 's'} ago`;
    } else if (timeAmounts[4] > 0) {
      return timeAmounts[4] + ` month${timeAmounts[4] === 1 ? '' : 's'} ago`;
    } else if (timeAmounts[3] > 0) {
      return timeAmounts[3] + ` week${timeAmounts[3] === 1 ? '' : 's'} ago`;
    } else if (timeAmounts[2] > 0) {
      return timeAmounts[2] + ` day${timeAmounts[2] === 1 ? '' : 's'} ago`;
    } else if (timeAmounts[1] > 0) {
      return timeAmounts[1] + ` hour${timeAmounts[1] === 1 ? '' : 's'} ago`;
    } else if (timeAmounts[0] > 0) {
      return timeAmounts[0] + ` minute${timeAmounts[0] === 1 ? '' : 's'} ago`;
    }
    return "less than 1 minute ago";
  }

  render() {

    return (
      <div className="comment-item">
        <Link className="profile-image" to={`/channel/${this.props.comment.author_id}`}>
          <img src="https://s3.amazonaws.com/blutube-dev/images/profile_image_300x200.png" />
        </Link>
        <div>
          <div>
            <div>{this.props.comment.username}</div>
            <div>{this.whenPosted(this.props.comment.createdAtInt)}</div>
          </div>
          <div>{this.props.comment.body}</div>
        </div>
      </div>
    );
  }
}

export default CommentIndexItem;
