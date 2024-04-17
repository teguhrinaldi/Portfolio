import React from 'react';
import Pic from '../../images/teguh2.png';

const About = () => {
	return (
		<div
			name="about"
			className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col md:flex-row"
		>
			<div className="max-w-screen-lg mx-auto p-4 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between">
				<div className="md:w-1/2 md:pr-8">
					<img src={Pic} alt="Teguh's Pic" className="rounded-lg w-full" />
				</div>
				<div className="md:w-1/2 mt-8 md:mt-0">
					<div className="pb-4 md:pb-8">
						<p className="text-4xl font-bold inline border-b-4 border-gray-500">
							About Me
						</p>
					</div>
					<p className="text-xl">
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
