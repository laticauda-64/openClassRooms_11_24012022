import './Hero.css';
import { useLocation } from 'react-router-dom';

const Hero = ({ title = '', coverImg }) => {
	// If current page is About page, add a class to hero to make it bigger on small screens
	const location = useLocation();

	return (
		<div className={'hero ' + (location.pathname.toLowerCase() === '/about' ? 'hero_sc' : '')}>
			<p className="hero__text">{title}</p>
			<div className="hero__darken-filter"></div>
			<img src={coverImg} alt="Hero Banner picture" className="hero__img" />
		</div>
	);
};

export default Hero;
