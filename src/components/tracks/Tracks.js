import React, { Component } from 'react'
import { Consumer } from '../../context'
import Track from './Track'
import loader from '../../assets/images/loader.gif'
class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { track_list, heading } = value
          return track_list.length ? (
            <div className="top-songs">
              <h3 className="text-center">Top {track_list.length} Songs</h3>
              <div className="row">
                {track_list.map((item, i) => {
                  return (
                    <div key={item.track.track_id} className="col-md-6 mb-3">
                      <Track data={item.track} />
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <img src={loader} alt=""/>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Tracks
