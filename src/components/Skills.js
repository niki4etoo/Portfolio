
import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';
import React from 'react';
import { skills } from '../data';

export default function Skills() {
	return (
		<section id="skills">
		  <div>
			<div>
			  <h1>
				Skills &amp; Technologies
			  </h1>
			</div>
			<div>
			  {skills.map((skill) => (
				<div key={skill}>
				  <div>
					<span>
					  {skill}
					</span>
				  </div>
				</div>
			  ))}
			</div>
		  </div>
		</section>
	);
}















