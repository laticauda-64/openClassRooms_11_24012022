import './Thumb.css';

const Thumb = ({ title = 'Titre de la location', imgCover }) => {
	return (
		<div className="thumb">
			<h3 className="thumb__title">{title}</h3>
			<img src={imgCover} alt="Miniature location" />
		</div>
	);
};

export default Thumb;
