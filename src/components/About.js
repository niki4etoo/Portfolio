import React from 'react';

import { gsap, Expo } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default class About extends React.Component {
	
	constructor(props){
		super(props);
		
		this.handleButtonContacts = this.handleButtonContacts.bind(this);
		this.handleButtonProjects = this.handleButtonProjects.bind(this);
		this.handleButtonWork = this.handleButtonWork.bind(this);
	}
	
	componentDidMount () {
		gsap.registerPlugin(ScrollToPlugin);
	}
	
	handleButtonContacts () {
		gsap.to(window, { duration: 2, scrollTo: '#contacts', ease: Expo.easeIn });
	}
	
	handleButtonProjects () {
		gsap.to(window, { duration: 2, scrollTo: '#projects', ease: Expo.easeIn });
	}
	
	handleButtonWork () {
		gsap.to(window, { duration: 2, scrollTo: '#work', ease: Expo.easeIn });
	}
	
	render () {
		return (
			<section id="about">
				<div className="container">
					<div className="intro">
						<h1>
							Hi, good creature of the nature.
						</h1>
						<h2>
						 I love to build amazing apps.
						</h2>
						<p>
							Let me introduce myself a bit. Creating web apps is a long journey with
							interesting and compelling experiences of learning, trying and applying
							different techniques, methods and approaches for the realization of the
							final products.
						</p>
						<p>
							Learning Javascript, React, HTML&CSS and different JS
							libraries and frameworks is amazing practice that includes challenges
							along the way.
						</p>
						<div className="buttons right" id="linkContacts" onClick={this.handleButtonContacts}>
							<a>Let's collaborate</a>
						</div>
						<div className="buttons" id="linkProjects" onClick={this.handleButtonProjects}>
							<a>Go to Projects</a>
						</div>
						<div className="buttons right" id="linkWork"  onClick={this.handleButtonWork}>
							<a>Go to My Work</a>
						</div>
					</div>
					<div className="coder">
						<img alt="hero" src="./coding.svg" width="500" height="400" />
					</div>
				</div>
			</section>
		);
	}
}
