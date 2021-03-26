import React from 'react';
import './assets/css/main.css';
import logo from './assets/img/canva-logo.png';
import Nav from './components/layout/Nav';

function App() {
	return (
		<div className='App'>
			<Nav />
			<div className="placeholdder-div">
				Content will display here.
			</div>
		</div>
	);
}

export default App;
