import React from 'react';

import './App.scss';
import Navbar from './comp/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/About" component={About} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
