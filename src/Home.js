import React from "react";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import './css/main.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Work from './components/Work';

export default class Home extends React.Component {
	
	constructor(props){
		super(props);
		
		gsap.registerPlugin(ScrollToPlugin);
		
		this.moveToTop = this.moveToTop.bind(this);
		this.handleScrollUp = this.handleScrollUp.bind(this);
	}
	
	moveToTop() {
		var scrollUpDuration = 1;
		var docScroll = document.documentElement.scrollTop;
		
		if(docScroll <= 10000) scrollUpDuration = 2;
		if(docScroll <= 8000) scrollUpDuration = 1.8;
		if(docScroll <= 6000) scrollUpDuration = 1.5;
		if(docScroll <= 4000) scrollUpDuration = 1.2;
		if(docScroll <= 2000) scrollUpDuration = 1;
		gsap.to(window, { duration: scrollUpDuration, scrollTo: 0 });
		
	}
	
	handleScrollUp() {
		this.btnScrollUp = document.getElementById('buttonScrollUp');
		
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			this.btnScrollUp.style.display = "block";
		} else {
			this.btnScrollUp.style.display = "none";
		}
	}
	
	componentDidMount() {
			window.addEventListener('scroll', this.handleScrollUp);
	}
	
	componentDidUpdate(){
		this.handleScrollUp();
	}
	
	render () {
		return (
				<div>
				<button onClick={this.moveToTop} id="buttonScrollUp" title="Go to Up">UP</button>
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
