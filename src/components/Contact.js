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
		
		var errorMessages = [];
		
		//Filters
		//Length
		if(title.length < 3) errorMessages['title']['tooShort'] = "The title should be at least 3 symbols";
		if(title.length > 250) errorMessages['title']['tooLong'] = "The title is too long. No more than 250 symbols";
		
		if(message.length < 20) errorMessages['message']['tooShort'] = "The message is too short. At least 20 symbols";
		if(message.length > 800) errorMessages['message']['tooLong'] = "The message is too long. No More than 800 symbols";
		
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
