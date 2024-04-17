import React from 'react';
import Dwi from '../../images/porto/dwidaya.png';
import Live from '../../images/porto/live1.png';
import Iot from '../../images/porto/mockup.png';
import Visit from '../../images/porto/visit.png';

const Portfolio = () => {
	const Projects = [
		{
			id: 1,
			src: Dwi,
			project: 'Dwidaya Tour',
		},
		{
			id: 2,
			src: Live,
			project: 'Live Tracking',
		},
		{
			id: 3,
			src: Iot,
			project: 'Smart Garden IOT',
		},
		{
			id: 4,
			src: Visit,
			project: 'Visitind Web Travel',
		},
	];

	return (
		<div
			name="project"
			className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Project
					</p>
					<p className="py-6">This is my Project i Worked with </p>
				</div>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{Projects.map(({ id, src, project }) => (
						<div
							key={id}
							className="shadow-md shadow-gray-600 rounded-lg max-w-xs"
						>
							<img
								src={src}
								alt=""
								className="rounded-md w-full h-auto duration-200 hover:scale-105"
							/>
							<div className="flex items-center justify-center ">
								<p className="w-full px-2  m-3 duration-200 text-gray-300 hover:scale-105">
									{project}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
