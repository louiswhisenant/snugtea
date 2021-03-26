import React from 'react';
import './assets/css/main.css';
import logo from './assets/img/canva-logo.png';
import Nav from './components/layout/Nav';

function App() {
	return (
		<div className='App'>
			<Nav />
			<header className='App-header'>
				<img src={logo} alt='' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
