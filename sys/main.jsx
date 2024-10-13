import React 						from 'react'
import ReactDOM 				from 'react-dom/client'
import { App }          from './App';
// ------------------------------------------------------------------------- //
// Create and setup React Web Application.
// ------------------------------------------------------------------------- //

async function enableMocking() {
	if (process.env.NODE_ENV === "development") {
		const { worker } = await import("/src/code/development/mocks/index.js");    
		return worker.start();  
	}
}

console.log("Start Application")
const root = ReactDOM.createRoot(document.getElementById('root'));
enableMocking().then(() => {root.render(<App/>);});

// ------------------------------------------------------------------------- //