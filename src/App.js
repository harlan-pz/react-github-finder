import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import FinderHeader from './component/FinderHeader/FinderHeader'
import Home from './component/Home/Home'
import Result from './component/Result/Result'
// import connect from 'react-redux'
// import * as action from './action/action'
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <div>
        <FinderHeader />
        <BrowserRouter>
          <Switch>
            <Route path="/result" component={Result} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
