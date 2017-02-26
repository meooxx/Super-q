import React from 'react';
import ReactDOM from 'react-dom';
import createLogger  from 'redux-Logger'
import thunk from 'redux-thunk'
import App from './container/App'
import reducers from './reducers/reducers'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

 //let middleware = [thunk].push(createLogger())
 const store = createStore(
   reducers,
	 applyMiddleware(thunk,createLogger())
 )




ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.body.appendChild(document.createElement('div'))
);
