import React from 'react';
import Hero from '../comp/Hero';
import Services from '../comp/Services';
import AboutInfo from '../comp/AboutInfo';
import Testimon from '../comp/Testimon';

const About = () => {
	return (
		<div className="about">
			<Hero />
			<AboutInfo />
			<Services />
			<Testimon />
		</div>
	);
};

export default About;
