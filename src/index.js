import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './assets/css/reset.css';
import App from './App';
import { Home, About, Error404, Habitation } from './pages/index';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="logement/:id" element={<Habitation />} />
					<Route path="about" element={<About />} />
					<Route path="404" element={<Error404 />} />
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
