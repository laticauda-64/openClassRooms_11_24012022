import './Home.css';
import { Thumb } from '../components/Ui/Thumb';

export const Home = (props) => {
	return (
		<div className="Home">
			{[...Array(10)].map((x, i) => (
				<Thumb key={i} />
			))}
		</div>
	);
};
