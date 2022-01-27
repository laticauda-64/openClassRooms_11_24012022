/**
 *
 * Rating component to display score on five stars
 *
 */

import './Rating.css';

const Rating = ({ score }) => {
	/**
	 * Create an array and fill it with the 'type' of star which should be rendered
	 */
	const rating = [];
	for (let i = 1; i <= 5; i++) {
		rating.push(i <= parseInt(score) ? 'full' : 'empty');
	}

	return (
		<div className="rating">
			<ul>
				{rating.map((star, i) => (
					<li key={i}>
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
								fill={star === 'empty' ? '#E3E3E3' : '#ff6060'}
							/>
						</svg>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Rating;
