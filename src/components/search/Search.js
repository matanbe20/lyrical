import React, { Component } from "react";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: ""
  };
  MAIN_API = "http://api.musixmatch.com/ws/1.1";

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onKeyPress(dispatch, preload, e) {
    if (e.keyCode === 13 && this.state.trackTitle.length) {
      dispatch({
        type: "SEARCH_TRACKS",
        payload: []
      });
      this.findLyrics(dispatch);
    }
  }

  findLyrics(dispatch, preload) {
    dispatch({
      type: "SEARCH_TRACKS",
      payload: []
    });
    fetch(
      `https://cors-anywhere.herokuapp.com/${
        this.MAIN_API
      }/track.search?q_track=${
        this.state.trackTitle
      }&page_size=10&page=1&s_track_rating=desc&apikey=${
        process.env.REACT_APP_MM_KEY
      }`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: data.message.body.track_list
        });
      });
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, preload } = value;
          return (
            <div className="card card-body track">
              <h2 className="text-center">Search for your favorite songs lyrics !</h2>
              <div className="row justify-content-md-center p-4">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a song ..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.handleChange.bind(this)}
                    onKeyDown={this.onKeyPress.bind(this, dispatch, preload)}
                  />
                  <button
                    onClick={this.findLyrics.bind(this, dispatch)}
                    type="button"
                    className="btn btn-primary btn-block"
                  >
                    Hit me!
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
