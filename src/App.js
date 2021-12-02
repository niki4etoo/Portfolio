import React from "react";

import './css/main.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
	<main className="">
		<Navbar />
		<About />
		<Projects />
		<Skills />
		<Testimonials />
		<Contact />
	</main>
  );
}
