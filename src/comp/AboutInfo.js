import React from 'react';
import IMG1 from '../img/hero.jpg';

const AboutInfo = () => {
	return (
		<div className="about-info">
			<div className=" container py-1">
				<h1 className="large text-center p-1">My Little Story</h1>
				<hr />
				<div className="about">
					<div className="about-left">
						<img src={IMG1} alt="" />
					</div>
					<div className="about-word p-2 ">
						<p className="small">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. At odit accusamus eligendi ipsum
							veniam quod cumque autem suscipit culpa! Eos sed quas labore inventore a vel dicta ea
							ratione corporis, similique quasi id consequuntur consequatur exercitationem non asperiores
							quod, assumenda ab fugiat eaque omnis, provident optio? Ea officiis corporis consectetur!
						</p>

						<p className="small">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat sunt eos ad vitae, ducimus
							libero praesentium est distinctio ratione enim. Quisquam corporis minus nesciunt quas hic
							soluta consectetur, eligendi repudiandae!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutInfo;
