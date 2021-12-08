import React from 'react';

import { gsap, Expo } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

function linkButtonsAnimations () {
	let btnContacts = document.querySelector('.linkContacts');
	let btnProjects = document.querySelector('.linkProjects');
	let btnWork = document.querySelector('.linkWork');
	
	let btnAnimationProps = { backgroundColor: 'rgb(95, 158, 160)', color: 'rgb(255, 255, 255)', duration: 0.8, ease: Expo.easeIn };
	
	let btnContactsAnimation = gsap.to(btnContacts, btnAnimationProps).pause();
	let btnProjectsAnimation = gsap.to(btnProjects, btnAnimationProps).pause();
	let btnWorkAnimation = gsap.to(btnWork, btnAnimationProps).pause();
	
	btnContacts.addEventListener('mouseenter', () => btnContactsAnimation.play());
	btnContacts.addEventListener('mouseleave', () => btnContactsAnimation.reverse());
	
	btnProjects.addEventListener('mouseenter', () => btnProjectsAnimation.play());
	btnProjects.addEventListener('mouseleave', () => btnProjectsAnimation.reverse());
	
	btnWork.addEventListener('mouseenter', () => btnWorkAnimation.play());
	btnWork.addEventListener('mouseleave', () => btnWorkAnimation.reverse());
}

export default class About extends React.Component {
	
	constructor(props){
		super(props);
		
		this.handleButtonContacts = this.handleButtonContacts.bind(this);
		this.handleButtonProjects = this.handleButtonProjects.bind(this);
		this.handleButtonWork = this.handleButtonWork.bind(this);
	}
	
	componentDidMount () {
		gsap.registerPlugin(ScrollToPlugin);
		
		linkButtonsAnimations();
		
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
							Hello and welcome to my portfolio.
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
						<br />
						<p>
							Learning Javascript, React, HTML&CSS and different JS
							libraries and frameworks is amazing practice that includes challenges
							along the way.
						</p>
						<div className="buttons linkContacts" onClick={this.handleButtonContacts}>
							<i>Let's collaborate</i>
						</div>
						<div className="buttons linkProjects" onClick={this.handleButtonProjects}>
							<i>Go to Projects</i>
						</div>
						<div className="buttons linkWork" onClick={this.handleButtonWork}>
							<i>Go to My Work</i>
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
