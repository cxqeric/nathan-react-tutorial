import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Home extends Component {
	render() {
		return (
			<div>
				<Link to='/about'>About</Link>
				<h1>Building Kickass React Applications With Nathan</h1>
			</div>
		);
	}
}
