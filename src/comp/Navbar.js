import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>IJ Visual</h1>

			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/About">About</Link>
				</li>
				<li>
					<Link to="/Project">Work</Link>
				</li>
				<li>
					<Link to="/Contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
