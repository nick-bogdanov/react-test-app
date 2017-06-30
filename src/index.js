import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router } from 'react-router'
import browserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { App } from './components/App'

import 'bootstrap/dist/css/bootstrap.css';

import reducers from './reducers'

/* eslint-disable no-underscore-dangle */
const store = createStore(
    combineReducers({
        reducers,
        routing: routerReducer
    })
)

const history = syncHistoryWithStore(browserHistory(), store)

render(
    <Provider store={store}>
        <Router history={history}>
            <App></App>
        </Router>
    </Provider>,
    document.getElementById('root')
)