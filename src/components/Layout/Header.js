import './Header.css';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className="header">
			<Link to="/">
				<img src={logo} alt="Logo de Kasa" />
			</Link>

			<div className="header__links">
				<Link to="/" className="link--active">
					Accueil
				</Link>
				<Link to="/about" className="">
					A propos
				</Link>
			</div>
		</header>
	);
};
