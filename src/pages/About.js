import { Hero } from '../components/Ui/Hero';
import './About.css';
import coverImg from '../assets/img/hero_bg_about_page.jpg';
import { DropDown } from '../components/Ui/DropDown';

export const About = () => {
	const valeurs = [
		{
			title: 'Fiabilité',
			content:
				'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
		},
		{
			title: 'Respect',
			content:
				'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
		},
		{
			title: 'Service',
			content:
				'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N &lsquo; hésitez pas à nous contacter si vous avez la moindre question.',
		},
		{
			title: 'Sécurité',
			content:
				'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&lsquo;hôte qu&lsquo;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
		},
	];

	return (
		<div className="about">
			<Hero coverImg={coverImg} />
			{valeurs.map((e, i) => (
				<DropDown key={i} title={e.title} content={e.content} />
			))}
		</div>
	);
};
