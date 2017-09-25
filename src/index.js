import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Root from './containers/root/Root';
import reducer from './reducers'

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
