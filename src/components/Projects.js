import React from 'react';
import { projects } from '../data';

export default function Projects() {
		return (
			<section id="projects">
				<div className="container">
					<div className="projects">
						<h1>
							Projects
						</h1>
						<p>
							The next part shows different projects that I
							have recently worked on. All of them includes React, 
							Javascript and HTML&CSS.
						</p>
					</div>
					<div className="projectList">
						{projects.map((project) => (
							<a
								href={project.link}
								key={project.image}
								>
							<div className="projectGallery">
								<img alt="gallery" src={project.image}	width="350" height="350" />
								<div>
									<h2>
										{project.subtitle}
									</h2>
									<h1>
										{project.title}
									</h1>
									<p>{project.description}</p>
								</div>
							</div>
						</a>
						))}
					</div>
				</div>
			</section>
		);
}
