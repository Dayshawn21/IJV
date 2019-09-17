import React from 'react';
import ImageGallery from 'react-image-gallery';

import IMG1 from '../img/Screenshot_20190328-194308_Instagram.jpg';
import IMG2 from '../img/Screenshot_20190328-194513_Instagram.jpg';
import IMG3 from '../img/Screenshot_20190328-194416_Instagram.jpg';
const Slide = () => {
	const images = [
		{
			original    : IMG1,
			thumbnail   : IMG1,
			description : 'Render custom slides within the gallery',
			sizes       : '10x10'
		},
		{
			original  : IMG2,
			thumbnail : IMG2,
			sizes     : '10x10'
		},
		{
			original  : IMG3,
			thumbnail : IMG3
		}
	];
	return <ImageGallery items={images} />;
};

export default Slide;
