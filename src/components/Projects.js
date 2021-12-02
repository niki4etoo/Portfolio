import React from 'react';
import { projects } from '../data';

export default function Projects() {
		return (
			<section id="projects">
				<div>
					<div>
						<h1>
							Created apps
						</h1>
						<p>
							The next part shows different projects that I
							have recently worked on. All of them includes React, 
							Javascript and HTML&CSS.
						</p>
					</div>
					<div>
						{projects.map((project) => (
							<a
								href={project.link}
								key={project.image}
								>
							<div>
								<img
									alt="gallery"
									src={project.image}
								/>
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
