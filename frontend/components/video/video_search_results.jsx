import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  videos: state.search.Video.slice(0,50)
});

const mapDispatchToProps = (dispatch) => ({

});

class Results extends React.Component {

  render() {
    return (
      <div>
        {this.props.videos.map(video => {
          return (
            <div>
              <div>{ video.title }</div>
              <div>{ video.author_id }</div>
              <img src={ video.thumbnailUrl } className="search-thumbnail"/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Results);
