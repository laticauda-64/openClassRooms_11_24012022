import './Home.css';
import { Hero, Loader, Thumb } from '../components/Ui';
import coverImg from '../assets/img/hero_bg.jpg';
import { useFetch } from '../utils/useFetch';

const Home = (props) => {
	const { data, loading, error } = useFetch('logements.json');

	if (error) {
		console.log(error);
	}

	return (
		<>
			<Hero title="Chez vous, partout et ailleurs" coverImg={coverImg} />
			{loading && <Loader />}
			{data && (
				<div className="Home">
					{data.map((e) => (
						<Thumb key={e.id} />
					))}
				</div>
			)}
		</>
	);
};

export default Home;
