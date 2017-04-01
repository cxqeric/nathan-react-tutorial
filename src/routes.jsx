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
		routes: [
			{
				path: '/about/react',
				component: AboutReact
			},
			{
				path: '/about/angular',
				component: AboutAngular
			}
		]
	}
];

export const RouteWithSubRoutes = (route) => {
	return (
		<Route 
			path={route.path}
			exact={route.exact} 
			render={(props) => <route.component { ...props } routes={route.routes} />}
		/>
	);
}

export default () => {
	return (
		<div>
		{
			routes.map((route, i) => <RouteWithSubRoutes key={i} { ...route } />)
		}
		</div>
	);
}
