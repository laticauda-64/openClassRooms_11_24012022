import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import './index.css';
import './assets/css/reset.css';
import App from './App';
import { Home, About, Error404, Habitation } from './pages/index';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="logement/:id" element={<Habitation />} />
					<Route path="about" element={<About />} />
					<Route path="404" element={<Error404 />} />
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
