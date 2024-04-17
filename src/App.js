import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Social from './components/Social/Social';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Expereince/Experience';
import Contact from './components/Contact/Contact';
const App = () => {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Portfolio />
			<Experience />
			<Contact />
			<Social />
		</div>
	);
};

export default App;
