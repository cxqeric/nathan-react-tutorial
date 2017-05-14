import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Home } from './components/Home';
import { About } from './components/About';
import { AboutReact } from './components/React';
import { AboutAngular } from './components/Angular';


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
		component: AboutReact,
		exact: true
	},
	{
		path: '/about/angular',
		component: AboutAngular,
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
