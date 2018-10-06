import React, { Component } from "react";
import "./lyrics.css";
import loader from "../../assets/images/loader.gif";
import { Link } from "react-router-dom";

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: ""
  };

  isLoaded = [];

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
        this.props.match.params.id
      }&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then(res => {
        return res.json();
      })
      .then(lyricsData => {
        this.isLoaded.push(true);
        this.setState({
          lyrics: lyricsData.message.body.lyrics.lyrics_body
        });
        return fetch(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
            this.props.match.params.id
          }&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then(res => {
        return res.json();
      })
      .then(trackData => {
        this.isLoaded.push(true);
        this.setState({
          track: trackData.message.body.track
        });
      });
  }
  render() {
    if (this.isLoaded.length === 2) {
      return (
        <div className="lyrics-page">
          <div className="text-center mb-4">
            <h3>Lyrics for {this.state.track.track_name}</h3>
            <h5>By {this.state.track.artist_name}</h5>
          </div>
          <pre>{this.state.lyrics}</pre>

          <div className="go-back">
            <Link to={process.env.PUBLIC_URL + '/'}>
              <button className="btn btn-dark"> Back</button>
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className="text-center">
        <img src={loader} alt="" />
      </div>
    );
  }
}

export default Lyrics;
