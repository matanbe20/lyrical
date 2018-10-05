import React, { Component } from 'react'
const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_TRACKS':
      return {
        ...state,
        track_list: action.payload
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
    track_list: [],
    heading: 'Top 10 results',
    dispatch: action => this.setState(state => reducer(state, action)),
    pre: action => this.setState(state => reducer(state, action))
  }

  MAIN_API = 'http://api.musixmatch.com/ws/1.1'

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/${
        this.MAIN_API
      }/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
        process.env.REACT_APP_MM_KEY
      }`
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({
          track_list: data.message.body.track_list
        })
      })
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
