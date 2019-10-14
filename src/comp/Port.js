import React from 'react';
import IMG1 from '../img/Screenshot_20190328-194308_Instagram.jpg';
import IMG2 from '../img/Screenshot_20190328-194349_Instagram.jpg';
import IMG3 from '../img/Screenshot_20190328-194416_Instagram.jpg';
import IMG4 from '../img/Screenshot_20190328-194448_Instagram.jpg';
import IMG5 from '../img/Screenshot_20190328-194513_Instagram.jpg';
import IMG6 from '../img/Screenshot_20190328-194607_Instagram.jpg';
import IMG7 from '../img/Screenshot_20190328-195354_Instagram.jpg';

const Port = () => {
	return (
		<div className="container">
			<h1 className="text-center">Portfolio </h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus excepturi inventore sapiente
				mollitia nam fugit.
			</p>

			<div className="pictures">
				<div className="picture">
					<img className="image" src={IMG1} alt="" />
					<div className="overlay">
						<div className="text">Dayshawn Terry </div>
					</div>
				</div>
				<div className="picture">
					<img src={IMG2} alt="" />
				</div>
				<div className="picture">
					<img src={IMG3} alt="" />
				</div>
				<div className="picture">
					<img src={IMG4} alt="" />
				</div>
				<div className="picture">
					<img src={IMG5} alt="" />
				</div>
				<div className="picture">
					<img src={IMG6} alt="" />
				</div>
				<div className="picture">
					<img src={IMG7} alt="" />
				</div>
				<div className="picture">
					<img src={IMG1} alt="" />
				</div>
				<div className="picture">
					<img src={IMG2} alt="" />
				</div>
				<div className="picture">
					<img src={IMG3} alt="" />
				</div>
				<div className="picture">
					<img src={IMG4} alt="" />
				</div>
				<div className="picture">
					<img src={IMG5} alt="" />
				</div>
				<div className="picture">
					<img src={IMG6} alt="" />
				</div>
				<div className="picture">
					<img src={IMG7} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Port;
