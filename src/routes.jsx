import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Home } from './components/Home';
import { About } from './components/About';
import ConnectedAboutReact from './components/React';
import ConnectedAboutAngular from './components/Angular';


export const routes = [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		path: '/about',
		component: About,
		exact: true,
	},
	{
		path: '/about/react',
		component: ConnectedAboutReact,
		exact: true
	},
	{
		path: '/about/angular',
		component: ConnectedAboutAngular,
		exact: true
	}
];

export default () => {
	return (
		<div>
		{
			routes.map((route, i) => <Route key={i} { ...route } />)
		}
		</div>
	);
}
