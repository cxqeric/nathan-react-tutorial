import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { RouteWithSubRoutes } from '../../routes';


export const About = ({ routes }) => {
	return (
		<div>
			<Link to='/'>Home</Link>
			<h1>Javascript Frameworks</h1>

			<ul>
				<li><Link to='/about/react'>React</Link></li>
				<li><Link to='/about/angular'>Angular</Link></li>
			</ul>

			{
				routes.map((route, i) => 
					<RouteWithSubRoutes key={i} { ...route } />
				)
			}
		</div>
	);
}