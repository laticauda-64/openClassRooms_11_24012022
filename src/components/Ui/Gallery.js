import './Gallery.css';

const Gallery = ({ pictures }) => {
	return (
		<div className="gallery">
			<img src={pictures} alt="Big Picture of the accomadation" className="gallery__bigPic" />
			<button type="button" className="gallery__Arr gallery__Arr__Left"></button>
			<button type="button" className="gallery__Arr gallery__Arr__Right"></button>
			<span className="gallery__count">1/4</span>
		</div>
	);
};

export default Gallery;
