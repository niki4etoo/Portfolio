import React from "react";

import './css/main.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Work from './components/Work';

export default class App extends React.Component {
	
	render () {
		return (
				<div>
					<Navbar />
					<About />
					<Projects />
					<Skills />
					<Work />
					<Contact />
				</div>
		 );
	}
  
}
