import React from 'react';

export default function About() {
	return (
		<section id="about">
			<div className="">
				<div className="">
					<h1 className="">
						Hi, here is Nikolai Nanev.
						<br className="" /> I love to build amazing apps.
					</h1>
					<p className="">
						Let me introduce myself a bit. Creating web apps is a long journey with
						interesting and compelling experiences of learning, trying and applying
						different techniques, methods and approaches for the realization of the
						final products. Learning Javascript, React, HTML&CSS and different JS
						libraries and frameworks is amazing practice that includes challenges
						along the way.
					</p>
					<div className="">
						<a
							href="#contact"
							>
							Let's collaborate
						</a>
						<a
							href="#projects"
							>
							Go to Projects
						</a>
					</div>
				</div>
				<div className="">
					<img
						alt="hero"
						src="./coding.svg"
					/>
				</div>
			</div>
		</section>
	);
}
