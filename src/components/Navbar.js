import React from "react";

import { gsap, Expo } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

function mainNavButtonsAnimations(){
	let nameLink = document.querySelector(".name");
	let projectLink = document.querySelector(".projects");
	let skillsLink = document.querySelector(".skills");
	let contactLink = document.querySelector(".contacts");
	
	let nameButtonAnim = gsap.to(nameLink, { backgroundColor: 'white', color: 'black', duration: 1 }).pause();
	let projectButtonAnim = gsap.to(projectLink, { backgroundColor: 'white', color: 'black', duration: 1 }).pause();
	let skillsButtonAnim = gsap.to(skillsLink, { backgroundColor: 'white', color: 'black', duration: 1 }).pause();
	let contactButtonAnim = gsap.to(contactLink, { backgroundColor: 'white', color: 'black', duration: 1 }).pause();
	
	nameLink.addEventListener('mouseenter', () => nameButtonAnim.play());
	nameLink.addEventListener('mouseleave', () => nameButtonAnim.reverse());
	
	projectLink.addEventListener('mouseenter', () => projectButtonAnim.play());
	projectLink.addEventListener('mouseleave', () => projectButtonAnim.reverse());
	
	skillsLink.addEventListener('mouseenter', () => skillsButtonAnim.play());
	skillsLink.addEventListener('mouseleave', () => skillsButtonAnim.reverse());
	
	contactLink.addEventListener('mouseenter', () => contactButtonAnim.play());
	contactLink.addEventListener('mouseleave', () => contactButtonAnim.reverse());
}

export default class Navbar extends React.Component {
	
	constructor(props){
		super(props);
		
		this.handleLinkToAbout = this.handleLinkToAbout.bind(this);
		this.handleLinkToProjects = this.handleLinkToProjects.bind(this);
		this.handleLinkToSkills = this.handleLinkToSkills.bind(this);
		this.handleLinkToContacts = this.handleLinkToContacts.bind(this);
	}
	
	componentDidMount () {
		gsap.registerPlugin(ScrollToPlugin);
		mainNavButtonsAnimations();
	}
	
	handleLinkToAbout () {
		gsap.to(window, { duration: 2, scrollTo: '#about', ease: Expo.easeIn });
	}
	
	handleLinkToProjects () {
		gsap.to(window, { duration: 2, scrollTo: '#projects', ease: Expo.easeIn });
	}
	
	handleLinkToSkills () {
		gsap.to(window, { duration: 2, scrollTo: '#skills', ease: Expo.easeIn });
	}
	
	handleLinkToContacts () {
		gsap.to(window, { duration: 2, scrollTo: '#contacts', ease: Expo.easeIn });
	}
	
	
	render () {
		return (
			<nav className="navbar">
				<div className="nav name" id="linkAbout" onClick={this.handleLinkToAbout}>
					<i>Nikolai Nanev</i>
				</div>
				<div className="nav projects" id="linkProjects" onClick={this.handleLinkToProjects}>
					<i>Projects</i>
				</div>
				<div className="nav empty">
				</div>
				<div className="nav empty">
				</div>
				<div className="nav skills" id="linkSkills" onClick={this.handleLinkToSkills}>
					<i>Skills</i>
				</div>
				<div className="nav contacts" id="linkContact" onClick={this.handleLinkToContacts}>
					<i>Contact Me</i>
				</div>
			</nav>
		);
	}
}
