import React, { useEffect } from "react";

import { gsap } from 'gsap';

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

export default function Navbar() {
	
	
	
	useEffect(() => {
		
		mainNavButtonsAnimations();

		

	}, []);
	
	return (
		<nav className="navbar">
			<div className="nav name">
				<a href="#about">Nikolai Nanev</a>
			</div>
			<div className="nav projects">
				<a href="#projects">
				Projects
				</a>
			</div>
			<div className="nav empty">
			</div>
			<div className="nav empty">
			</div>
			<div className="nav skills">
				<a href="#skills">
				Skills
				</a>
			</div>
			<div className="nav contacts">
				<a href="#contact"> Contact Me </a>
			</div>
		</nav>
	);
}
