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
				</div>
				<span className="habitation__infos__topBlock__ownerName">Alexandre Dumas</span>
				<img
					src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
					alt="Owner avatar"
					className="habitation__infos__topBlock__ownerAvatar"
				/>
			</div>

			<ul className="habitation__infos__tagsAndRating">
				<Tag title="Cozy" />
				<Tag title="Canal" />
				<Tag title="Paris 10" />
				<Rating score="3" />
			</ul>

			<div className="habitation__infos__main">
				<DropDown />
				<DropDown />
			</div>
		</section>
	);
};

export default Habitation;
