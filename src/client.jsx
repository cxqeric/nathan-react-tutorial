import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';


const dest = document.getElementById('root');
const render = Component => 
	ReactDOM.render(
		<AppContainer>
			<BrowserRouter>
				<Component />
			</BrowserRouter>
		</AppContainer>,
		dest
	);

render(Routes);

if (module.hot) {
	module.hot.accept();
}
