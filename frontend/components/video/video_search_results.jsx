import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  videos: state.search.Video.slice(0,50)
});

const mapDispatchToProps = (dispatch) => ({

});

class Results extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        {this.props.videos.map(video => {
          return (
            <div>
              <div>{ video.title }</div>
              <div>{ video.id }</div>
              <div>{ video.description }</div>
              <div>{ video.author_id }</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Results);
