import './Thumb.css';

export const Thumb = ({ title = 'Titre de la location', imgCover }) => {
	return (
		<div className="thumb">
			{/* <img src={imgCover} alt="Miniature location" /> */}
			<h3 className="thumb__title">{title}</h3>
		</div>
	);
};
