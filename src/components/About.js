import React from 'react';

export default function About() {
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
					<div className="buttons right">
						<a href="#contact">Let's collaborate</a>
					</div>
					<div className="buttons">
						<a href="#projects">Go to Projects</a>
					</div>
				</div>
				<div className="coder">
					<img alt="hero" src="./coding.svg" width="500" height="400" />
				</div>
			</div>
		</section>
	);
}
