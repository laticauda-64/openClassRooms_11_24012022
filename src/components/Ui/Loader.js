/**
 *
 * A simple loader component with a svg in the theme of Kasa's colors
 */

import './Loader.css';
import LoaderSvg from '../../assets/img/loader.svg';

const Loader = () => {
	return (
		<div className="loader">
			<div className="loader__content">
				<object type="image/svg+xml" data={LoaderSvg}>
					svg-animation
				</object>
				<p>Loading data...</p>
			</div>
		</div>
	);
};

export default Loader;
