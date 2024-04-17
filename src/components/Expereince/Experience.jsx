import React from 'react';
import Css from '../../images/experience/Css.png';
import Figma from '../../images/experience/Figma.png';
import Git from '../../images/experience/Git.png';
import Github from '../../images/experience/Github.png';
import Html from '../../images/experience/html.png';
import Sql from '../../images/experience/Mysql.png';
import Node from '../../images/experience/Node.png';
import Sass from '../../images/experience/Sass.png';
import Tail from '../../images/experience/Tail.png';
import Rjs from '../../images/experience/Rjs.png';
import Js from '../../images/experience/JS.png';

const Experience = () => {
	const exp = [
		{
			id: 1,
			src: Css,
			title: 'CSS',
			style: 'shadow-sky-500',
		},
		{
			id: 2,
			src: Figma,
			title: 'FIGMA',
			style: 'shadow-pink-500',
		},
		{
			id: 3,
			src: Git,
			title: 'GIT',
			style: 'shadow-orange-500',
		},
		{
			id: 4,
			src: Github,
			title: 'GITHUB',
			style: 'shadow-gray-400',
		},
		{
			id: 5,
			src: Html,
			title: 'HTML',
			style: 'shadow-orange-500',
		},
		{
			id: 6,
			src: Sql,
			title: 'MySQL',
			style: 'shadow-gray-400',
		},
		{
			id: 7,
			src: Node,
			title: 'NODE',
			style: 'shadow-green-500',
		},
		{
			id: 8,
			src: Sass,
			title: 'SASS',
			style: 'shadow-pink-500',
		},
		{
			id: 9,
			src: Tail,
			title: 'TAILWIND',
			style: 'shadow-cyan-500',
		},
		{
			id: 10,
			src: Rjs,
			title: 'REACT',
			style: 'shadow-blue-500',
		},
		{
			id: 11,
			src: Js,
			title: 'JAVASCRIPT',
			style: 'shadow-yellow-500',
		},
	];

	return (
		<div
			name="experience"
			className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
				<div>
					<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
						Experience
					</p>
					<p className="py-6">These the tech i've work with</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center py-8 px-12 sm:px-0">
					{exp.map(({ id, src, title, style }) => (
						<div
							key={id}
							className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} text-center max-w-xs`}
						>
							<img src={src} alt="" className="w-20 mx-auto" />
							<p className="mt-4">{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
