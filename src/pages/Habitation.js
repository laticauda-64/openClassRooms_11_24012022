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
				<img src="#" alt="Owner avatar" className="habitation__infos__topBlock__ownerAvatar" />
			</div>

			<div className="habitation__infos__tagsAndRating">
				<Tag />
				<Rating />
			</div>

			<div className="habitation__infos__main">
				<DropDown />
				<DropDown />
			</div>
		</section>
	);
};

export default Habitation;
