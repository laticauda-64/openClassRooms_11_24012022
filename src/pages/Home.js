import './Home.css';
import { Thumb } from '../components/Ui/Thumb';
import { Hero } from '../components/Ui/Hero';
import coverImg from '../assets/img/hero_bg.jpg';

export const Home = (props) => {
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
