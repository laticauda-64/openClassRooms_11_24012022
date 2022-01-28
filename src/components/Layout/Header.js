import './Header.css';
import logo from '../../assets/img/logo.svg';
import { NavLink, Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className="header">
			<Link to="/">
				<img src={logo} alt="Logo de Kasa" className="header__logo" />
			</Link>

			<div className="header__links">
				<NavLink to="/" className={({ isActive }) => (isActive ? 'link--active' : '')}>
					Accueil
				</NavLink>
				<NavLink to="/about" className={({ isActive }) => (isActive ? 'link--active' : '')}>
					A propos
				</NavLink>
			</div>
		</header>
	);
};
