import { Gallery, Tag, Rating, DropDown } from '../components/Ui';
import './Habitation.css';

const Habitation = () => {
	return (
		<section className="habitation">
			<Gallery />

			<div className="habitation__infos">
				<div className="habitation__infos__topBlock">
					<h1 className="habitation__infos__topBlock__title">Crazy loft on the Canal Saint-Martin</h1>
					<span className="habitation__infos__topBlock__location">Paris, île-de-France</span>
					<ul>
						<Tag title="Cozy" />
						<Tag title="Canal" />
						<Tag title="Paris 10" />
					</ul>
				</div>

				<div className="habitation__infos__topBlock__right">
					<div className="habitation__infos__topBlock__owner">
						<span className="habitation__infos__topBlock__ownerName">
							<p>Alexandre</p>
							<p>Dumas</p>
						</span>
						<img
							src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
							alt="Owner avatar"
							className="habitation__infos__topBlock__ownerAvatar"
						/>
					</div>

					<div className="habitation__infos__tagsAndRating">
						<Rating score="3" />
					</div>
				</div>
			</div>

			<div className="habitation__infos__main">
				<DropDown
					title="Description"
					content="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
					type="small"
				/>
				<DropDown
					title="Équipements"
					content={[<p key="1">Climatisation</p>, <p key="2">Wifi</p>, <p key="3">Cuisine</p>, <p key="3">Espace de travail</p>]}
					type="small"
				/>
			</div>
		</section>
	);
};

export default Habitation;
