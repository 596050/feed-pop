import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { PostsPage } from './view'

import './styles/index.less'

const App = () => (
  <Switch>
    <Route exact path="/" component={PostsPage} />
  </Switch>
)

export default App
