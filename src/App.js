import './App.css';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Ui/Hero';
import { Thumb } from './components/Ui/Thumb';
import { Home } from './pages/Home';
import { Footer } from './components/Layout/Footer';

function App() {
	return (
		<>
			<div className="App">
				<Header />
				<Hero />
				<Home>
					<Thumb />
				</Home>
			</div>
			<Footer />
		</>
	);
}

export default App;
