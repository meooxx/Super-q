import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import thunk from 'redux-thunk'
import { Provider} from 'react-redux'
import { createStore ,applyMiddleware} from 'redux'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import reducers from './reducers/reducers'

let store=createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
	<Router>
		<App />
	</Router>
</Provider>,
  document.body.appendChild(document.createElement('div'))
);
