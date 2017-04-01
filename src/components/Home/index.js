import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Home extends Component {
	render() {
		return (
			<div>
				<Link to='/about'>About</Link>
				<h1>The React Tutorial Nathan Wishes He Had</h1>
			</div>
		);
	}
}
