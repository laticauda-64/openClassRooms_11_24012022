import './Footer.css';
import kasaLogo from '../../assets/img/kasa_bw_logo.svg';

export const Footer = () => {
	return (
		<div className="footer">
			<img src={kasaLogo} alt="Kasa Logo" className="footer__logo" />
			<span>© 2020 Kasa. All rights reserved</span>
		</div>
	);
};
