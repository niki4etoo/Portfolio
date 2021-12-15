import React from "react";
import { gsap, Power2 } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Link } from 'react-router-dom';

import './css/intro.css';

export default class App extends React.Component {
	
	constructor(props){
		super(props);
		
		gsap.registerPlugin(ScrollToPlugin);
	}
	
	componentDidMount() {
		
		let wrapper = document.getElementsByClassName('wrapper');
		
		let introline = wrapper[0].children[0];
		let bigline = wrapper[0].children[1];
		
		gsap.set([introline, bigline], { x: "-101%" });
		gsap.to(introline, { duration: 2, x: "0%", ease: Power2.easeOut });
		gsap.to(bigline, { duration: 2, x: "0%", ease: Power2.easeOut }, "+=0.3");
		
		const hoverIntroline = gsap.to(introline, { duration: 1, scaleX: 1.05, scaleY: 1.05, paused: true });
		const hoverBigline = gsap.to(bigline, { duration: 1, scaleX: 1.05, scaleY: 1.05, paused: true });
		
		introline.addEventListener('mouseenter', () => hoverIntroline.play());
		introline.addEventListener('mouseleave', () => hoverIntroline.reverse());
		
		bigline.addEventListener('mouseenter', () => hoverBigline.play());
		bigline.addEventListener('mouseleave', () => hoverBigline.reverse());
	}
	
	componentDidUpdate(){
		
	}
	
	render () {
		return (
				<div className="wrapper">
						<div className="introline">
							<Link to="/Home">
								Nikolai Nanev's portfolio
							</Link>
						</div>
						<div className="bigline">
							<Link to="/Home">
								Click on the text
							</Link>
						</div>
				</div>
		 );
	}  
}
