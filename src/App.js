import './App.css';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			<div className="App">
				<Header />

				<Outlet />
			</div>
			<Footer />
		</>
	);
}

export default App;
