import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk'

import './assets/styles.css'
import App from './components/App'
import reducers from './reducers'

const root = document.getElementById('root')
const store = createStore(reducers, applyMiddleware(reduxThunk))



render(
<Provider store={store}>
    <App/>
</Provider>,
root
)