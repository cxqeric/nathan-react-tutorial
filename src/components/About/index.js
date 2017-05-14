import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export const About = ({ routes }) => {
	return (
		<div>
			<Link to='/'>Home</Link>
			<h1>Javascript Frameworks</h1>

			<ul>
				<li><Link to='/about/react'>React</Link></li>
				<li><Link to='/about/angular'>Angular</Link></li>
			</ul>

		</div>
	);
}
