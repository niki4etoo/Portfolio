
import React from 'react';

export default function Contact() {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");
	
	function encode(data) {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
				).join("&");
	}
	
	function handleSubmit(e) {
		e.preventDefault();
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", name, email, message }),
		})
		.then(() => alert("Message sent!"))
		.catch((error) => alert(error));
	}
	
	return (
		<section id="contact" className="relative">
		  
		</section>
	);
}
