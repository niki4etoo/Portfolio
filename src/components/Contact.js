import React from 'react';

export default function Contact() {
	const [title, setTitle] = React.useState("");
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
				
		//To do
		console.log(title);
		console.log("encoded: " + encode(title));
		console.log(email);
		console.log("encoded: " + encode(email));
		console.log(message);
		console.log("encoded: " + encode(message));
	}
	
	return (
		<section id="contacts">
		  <div className="container">
			<div className="contacts">
				<h1>Contacts</h1>
				<p>email: <a href="mailto:niki4etooo@gmail.com">niki4etooo@gmail.com</a></p>
				<p>twitter: <a href="https://twitter.com/niki4etooo">@niki4etoo</a></p>
				<p>github: <a href="https://github.com/niki4etoo">github.com/niki4etoo</a></p>
				
				<form action="" method="post">	
						<div className="inputs">
							<input type="email" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} required />
						</div>			
						<div className="inputs">
							<input type="text" placeholder="Your title" name="title" onChange={(e) => setTitle(e.target.value)} required />
						</div>	
						<div className="inputs">
							<textarea name="message" placeholder="Your message goes here" onChange={(e) => setMessage(e.target.value)} rows="4">
							</textarea>
						</div>
						<div className="contactButtons">
							<button type="submit" onClick={(e) => handleSubmit(e)}>Send</button><button type="reset">Clear</button>
						</div>
					</form>
				</div>
		  </div>
		</section>
	);
}
