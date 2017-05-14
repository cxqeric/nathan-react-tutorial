import React from 'react';
import { Link } from 'react-router-dom';

import Comments from '../Comments';


export const AboutReact = () => {
	return (
		<div>
			<Link to='/about'>About</Link>
			<h1>React</h1>
			<p>A Javascript Library For Building User Interfaces</p>

			<Comments />
		</div>
	);
}
