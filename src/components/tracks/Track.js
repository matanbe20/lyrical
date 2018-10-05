import React from "react";
import "./track.css";
import { Link } from "react-router-dom";

const Track = props => {
  const track = props.data;
  return (
    <div className="card track">
      <div className="card-body">
        <h5 className="card-title">{track.artist_name}</h5>
        <div>Song: {track.track_name}</div>
        <div>Album: {track.album_name}</div>
        <p style={{ fontSize: "13px" }}>
          Genres:{" "}
          {!track.primary_genres.music_genre_list.length ? (
            <span> Unknown</span>
          ) : (
            track.primary_genres.music_genre_list.map((item, i) => {
              return (
                <span className="text-primary" key={i}>
                  {item.music_genre.music_genre_name}
                  {i !== track.primary_genres.music_genre_list.length - 1
                    ? ", "
                    : null}
                </span>
              );
            })
          )}
        </p>
        <div className="text-right">
          <Link to={`lyrics/${track.track_id}`} className="btn btn-dark btn-sm">
            > View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
