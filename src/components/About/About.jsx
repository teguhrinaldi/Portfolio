import React from 'react';
import Pic from '../../images/teguh2.png';

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-row justify-between w-full">
				<div className="w-1/2 pr-8">
					<img src={Pic} alt="Teguh's Pic" className="rounded-lg" />
				</div>
				<div className="w-1/2">
					<div className="pb-1">
						<p className="text-4xl font-bold inline border-b-4 border-gray-500">
							About Me
						</p>
					</div>
					<p className="text-xl mt-20">
						Hey there! I'm Teguh Rinaldi, a dedicated Front End developer fueled
						by creativity and a knack for tackling challenges head-on. With a
						fusion of technical expertise and a user-focused mindset, I'm
						committed to crafting seamless digital solutions that resonate with
						your audience. Let's team up and turn your ideas into reality!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
