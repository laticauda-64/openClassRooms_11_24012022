import './Header.css';
import logo from '../../assets/img/logo.svg';

export const Header = () => {
	return (
		<header className="header">
			<a href="#">
				<img src={logo} alt="Logo de Kasa" />
			</a>
			<div className="header__links">
				<a href="#" className="link--active">
					Accueil
				</a>
				<a href="#">A propos</a>
			</div>
		</header>
	);
};
