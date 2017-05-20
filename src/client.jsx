import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './redux/store';


const dest = document.getElementById('root');
const render = Component => 
	ReactDOM.render(
		<Provider store={store}>
			<AppContainer>
				<BrowserRouter>
					<Component />
				</BrowserRouter>
			</AppContainer>
		</Provider>,
		dest
	);

render(Routes);

if (module.hot) {
	module.hot.accept();
}
