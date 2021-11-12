import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'

import App from './main/app'
import reducers from './main/reducers'

const store = applyMiddleware(multi, promise)(createStore)(reducers)
ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
document.getElementById('app'))