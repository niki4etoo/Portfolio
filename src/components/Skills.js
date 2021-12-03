import React from 'react';
import { skills } from '../data';

export default function Skills() {
	return (
		<section id="skills">
		  <div className="container">
			<div className="skills">
			
			  <h1>Skills</h1>
			  
				<div className="skillsList">
				  {skills.map((skill) => (
					<div className="skillItem" key={skill}>
					  <div>
						<span>
						  {skill}
						</span>
					  </div>
					</div>
				  ))}
				</div>
			</div>
		  </div>
		</section>
	);
}















