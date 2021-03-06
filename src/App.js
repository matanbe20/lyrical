import React, { Component } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Lyrics from './components/lyrics/Lyrics'
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Index} />
                <Route exact path={process.env.PUBLIC_URL + '/lyrics/:id'} component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App
