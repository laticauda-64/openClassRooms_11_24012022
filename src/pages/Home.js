import './Home.css';
import { Hero, Thumb } from '../components/Ui';
import coverImg from '../assets/img/hero_bg.jpg';

const Home = (props) => {
	return (
		<>
			<Hero title="Chez vous, partout et ailleurs" coverImg={coverImg} />
			<div className="Home">
				{[...Array(10)].map((x, i) => (
					<Thumb key={i} />
				))}
			</div>
		</>
	);
};

export default Home;
