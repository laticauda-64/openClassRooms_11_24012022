import './App.css';
import { Header } from './components/Layout/Header';
import { Thumb } from './components/Ui/Thumb';
import { Home } from './pages/Home';
import { Footer } from './components/Layout/Footer';
import { Link, Outlet } from 'react-router-dom';

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
