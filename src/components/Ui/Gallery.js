/**
 * Gallery component
 */

import { useState } from 'react';
import './Gallery.css';

const Gallery = ({ pictures }) => {
	const [currentImg, setCurrentImg] = useState(pictures[0]);
	const [currentImgIndex, setCurrentImgIndex] = useState(0);

	const navigate = (direction) => {
		let index = currentImgIndex + direction;

		// If we hit the end of the array, next display the first img
		if (currentImgIndex + direction > pictures.length - 1) {
			index = 0;
		}

		// If current img is the first, prev display the last img
		if (currentImgIndex + direction < 0) {
			index = pictures.length - 1;
		}

		setCurrentImg(pictures[index]);
		setCurrentImgIndex(index);
	};

	return (
		<div className="gallery">
			<img src={currentImg} alt="Big Picture of the accomadation" className="gallery__bigPic" />
			{pictures.length > 1 && (
				<>
					<button type="button" className="gallery__Arr gallery__Arr__Left" onClick={() => navigate(-1)}></button>
					<button type="button" className="gallery__Arr gallery__Arr__Right" onClick={() => navigate(1)}></button>
				</>
			)}
			<span className="gallery__count">
				{currentImgIndex + 1}/{pictures.length}
			</span>
		</div>
	);
};

export default Gallery;
