import React from 'react';
import { Link } from 'react-router-dom';

import Comments from '../Comments';


export const AboutAngular = () => {
	return (	
		<div>		
			<Link to='/about'>About</Link>
			<h1>Angular</h1> 
			<p>One framework. Mobile & desktop.</p>
			<Comments />
		</div>
	);
} 
