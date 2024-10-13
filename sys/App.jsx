import React 						from 'react'
import {Provider}				from 'react-redux';
import {BrowserRouter} 	from 'react-router-dom';
import {store} 					from '/src/code/store/store.js';
import Router 					from '/src/pages/router.jsx'
// ------------------------------------------------------------------------- //
// The main React component defining the structure of the application.
// ------------------------------------------------------------------------- //

export const App = receivedProps => (
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

// ------------------------------------------------------------------------- //