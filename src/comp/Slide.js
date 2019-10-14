import React, { useState, useEffect } from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

import IMG1 from '../img/Screenshot_20190328-194308_Instagram.jpg';
import IMG2 from '../img/Screenshot_20190328-194513_Instagram.jpg';
import IMG3 from '../img/Screenshot_20190328-194416_Instagram.jpg';

const initial_index = 0;
const Slide = () => {
	const [
		index,
		setIndex
	] = useState(initial_index);

	useEffect(
		() => {
			const interval = setInterval(() => {
				if (index === images.length - 1) {
					setIndex(initial_index);
				}
				else {
					setIndex(index + 1);
				}
			}, 2500);
			return () => clearInterval(interval);
		},
		[
			index
		]
	);

	const images = [
		{
			src : IMG1
		},
		{
			src : IMG2
		},
		{
			src : IMG3
		}
	];
	return (
		<div style={{ background: 'black', width: '100w', height: '100vh', color: 'white' }}>
			<Gallery
				index={index}
				onRequestChange={(i) => {
					setIndex(i);
				}}
			>
				{images.map((img) => <GalleryImage objectFit="contain" key={img.src} src={img.src} />)}
			</Gallery>
		</div>
	);
};

export default Slide;
