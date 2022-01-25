import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/index.css';
import './assets/css/reset.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/logement" element={''} />
				<Route path="/a-propos" element={''} />
				<Route path="/404" element={''} />
				<Route path="*" element={''} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
