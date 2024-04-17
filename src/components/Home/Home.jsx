import React from 'react';
import Poto from '../../images/teguh1.png';
import { LiaArrowRightSolid } from 'react-icons/lia';
import { Link } from 'react-scroll';

const Home = () => {
	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-black via-black   to-gray-800"
			style={{ display: 'flex', alignItems: 'center' }}
		>
			<div
				className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
				style={{ flexWrap: 'nowrap' }}
			>
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl sm:text-7xl font-bold text-white">
						I'm Teguh Rinaldi
					</h2>
					<p className="text-gray-400 py-4 max-w-md">
						An enthusiastic Front End developer, breathing life into code with
						my skills and creativity, crafting interfaces that not only
						captivate attention but also mesmerize with their beauty. With a
						fiery passion, I turn every project into a stage to express
						innovation and inspiration.
					</p>
					<div className="">
						<Link
							to="portfolio"
							smooth
							duration={500}
							className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
						>
							Project
							<span className="group-hover:rotate-90 duration-300 ">
								<LiaArrowRightSolid size={20} className="ml-2" />
							</span>
						</Link>
					</div>
				</div>
				<div className="flex justify-center items-center h-full">
					<img
						src={Poto}
						alt="my Memoji"
						className="rounder-2xl md:w-6/"
						style={{ maxHeight: '45vh', maxWidth: 'auto', height: 'auto' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
