import React from "react";

import { gsap, Expo } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

function mainNavButtonsAnimations(){
	let nameLink = document.querySelector(".name");
	let projectLink = document.querySelector(".projects");
	let skillsLink = document.querySelector(".skills");
	let contactLink = document.querySelector(".contacts");
	let workLink = document.querySelector(".work");
	
	let optionsAnim = { backgroundColor: 'white', color: 'black', duration: 0.4 };
	let nameBtnAnim = gsap.to(nameLink, optionsAnim).pause();
	let projectBtnAnim = gsap.to(projectLink, optionsAnim).pause();
	let skillsBtnAnim = gsap.to(skillsLink, optionsAnim).pause();
	let contactBtnAnim = gsap.to(contactLink, optionsAnim).pause();
	let workBtnAnim = gsap.to(workLink, optionsAnim).pause();
	
	nameLink.addEventListener('mouseenter', () => nameBtnAnim.play());
	nameLink.addEventListener('mouseleave', () => nameBtnAnim.reverse());
	
	projectLink.addEventListener('mouseenter', () => projectBtnAnim.play());
	projectLink.addEventListener('mouseleave', () => projectBtnAnim.reverse());
	
	skillsLink.addEventListener('mouseenter', () => skillsBtnAnim.play());
	skillsLink.addEventListener('mouseleave', () => skillsBtnAnim.reverse());
	
	contactLink.addEventListener('mouseenter', () => contactBtnAnim.play());
	contactLink.addEventListener('mouseleave', () => contactBtnAnim.reverse());
	
	workLink.addEventListener('mouseenter', () => workBtnAnim.play());
	workLink.addEventListener('mouseleave', () => workBtnAnim.reverse());
}

export default class Navbar extends React.Component {
	
	constructor(props){
		super(props);
		
		this.handleLinkToAbout = this.handleLinkToAbout.bind(this);
		this.handleLinkToProjects = this.handleLinkToProjects.bind(this);
		this.handleLinkToSkills = this.handleLinkToSkills.bind(this);
		this.handleLinkToContacts = this.handleLinkToContacts.bind(this);
		this.handleLinkToWork = this.handleLinkToWork.bind(this);
	}
	
	componentDidMount () {
		gsap.registerPlugin(ScrollToPlugin);
		mainNavButtonsAnimations();
	}
	
	handleLinkToAbout () {
		gsap.to(window, { duration: 0.5, scrollTo: '#about', ease: Expo.easeIn });
	}
	
	handleLinkToProjects () {
		gsap.to(window, { duration: 0.5, scrollTo: '#projects', ease: Expo.easeIn });
	}
	
	handleLinkToSkills () {
		gsap.to(window, { duration: 0.5, scrollTo: '#skills', ease: Expo.easeIn });
	}
	
	handleLinkToContacts () {
		gsap.to(window, { duration: 0.5, scrollTo: '#contacts', ease: Expo.easeIn });
	}
	
	handleLinkToWork () {
		gsap.to(window, { duration: 0.5, scrollTo: '#work', ease: Expo.easeIn });
	}
	
	render () {
		return (
			<nav className="navbar">
				<div className="nav name" onClick={this.handleLinkToAbout}>
					<i>Nikolai Nanev</i>
				</div>
				<div className="nav projects" onClick={this.handleLinkToProjects}>
					<i>Projects</i>
				</div>
				<div className="nav empty"></div>
				<div className="nav empty"></div>
				<div className="nav skills" onClick={this.handleLinkToSkills}>
					<i>Skills</i>
				</div>
				<div className="nav work" onClick={this.handleLinkToWork}>
					<i>CodePen</i>
				</div>
				<div className="nav empty"></div>
				<div className="nav empty"></div>
				<div className="nav contacts" onClick={this.handleLinkToContacts}>
					<i>Contact Me</i>
				</div>
			</nav>
		);
	}
}
