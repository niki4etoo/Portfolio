import React from "react";

import './css/main.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
		<div>
			<Navbar />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
  );
}
