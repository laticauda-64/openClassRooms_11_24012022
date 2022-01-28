import './Home.css';
import { Hero, Loader, Thumb } from '../components/Ui';
import coverImg from '../assets/img/hero_bg.jpg';
import { useFetch } from '../utils/useFetch';
import { Link } from 'react-router-dom';

const Home = (props) => {
	const { data, loading, error } = useFetch(process.env.REACT_APP_FETCH_PATH);

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
						<Link key={e.id} to={`/logement/${e.id}`}>
							<Thumb title={e.title} imgCover={e.cover} />
						</Link>
					))}
				</div>
			)}
		</>
	);
};

export default Home;
