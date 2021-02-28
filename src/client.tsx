import React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

import App from './App'

const renderMethod = !!module.hot ? render : hydrate

renderMethod(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}

OfflinePluginRuntime.install()
