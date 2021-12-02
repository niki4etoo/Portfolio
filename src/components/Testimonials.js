import React from "react";
import { testimonials } from "../data";

export default function Testimonials() {
	return (
		<section id="testimonials">
		  <div>
		  
			<h1>Client Testimonials</h1>
			<div>
			  {testimonials.map((testimonial) => (
				<div>
				  <div>
					<p>{testimonial.quote}</p>
					<div>
					  <img
						alt="testimonial"
						src={testimonial.image}
					  />
					  <span>
						<span>
						  {testimonial.name}
						</span>
						<span>
						  {testimonial.company}
						</span>
					  </span>
					</div>
				  </div>
				</div>
			  ))}
			</div>
		  </div>
		</section>
	);
}
