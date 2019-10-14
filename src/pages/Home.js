import React from 'react';
import Slide from '../comp/Slide';
import Hero from '../comp/Hero';
import Services from '../comp/Services';
import AboutInfo from '../comp/AboutInfo';
import Testimon from '../comp/Testimon';

const Home = () => {
	return (
		<div className="back">
			<Slide />

			<AboutInfo />
			<Services />
			<Testimon />
		</div>
	);
};

export default Home;
