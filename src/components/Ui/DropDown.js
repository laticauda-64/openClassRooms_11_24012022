import './DropDown.css';
import { useState } from 'react';
import arrowUp from '../../assets/img/arrow_up.svg';

export const DropDown = ({ title, content, type = 'large' }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<article className={'dropdown ' + (type === 'large' ? 'large' : 'min')}>
			<div className="dropdown__title">
				<h3>{title}</h3>
				<img src={arrowUp} alt="Open/Close dropdown" />
			</div>
			<p className="dropdown__content">{content}</p>
		</article>
	);
};
