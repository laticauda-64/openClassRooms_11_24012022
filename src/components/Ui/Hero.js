import './Hero.css';

export const Hero = ({ title = '', coverImg }) => {
	return (
		<div className="hero">
			<p className="hero__text">{title}</p>
			<div className="hero__darken-filter"></div>
			<img src={coverImg} alt="Hero Banner picture" className="hero__img" />
		</div>
	);
};
