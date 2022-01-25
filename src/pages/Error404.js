import './Error404.css';
import { Link } from 'react-router-dom';

export const Error404 = () => {
	return (
		<div className="error404">
			<span className="error404__bigNum">404</span>
			<p className="error404__text">Oups! La page que vous demandez n&apos;existe pas.</p>
			<Link to="/" className="error404__link">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
};
