import React 					from 'react'
import {Provider}			from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store} 				from '/src/code/store/store.js';
import Router 				from '/src/pages/router.jsx'
// ------------------------------------------------------------------------- //
// The main React component defining the structure of the application.
// ------------------------------------------------------------------------- //

export const App = props => (
	<React.StrictMode>
		<Provider store={store}>
			<MemoryRouter>
				<Router />
			</MemoryRouter>
		</Provider>
	</React.StrictMode>
);

// ------------------------------------------------------------------------- //