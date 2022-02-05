import { Gallery, Tag, Rating, DropDown, Loader } from '../components/Ui';
import { useFetch } from '../utils/useFetch';
import { useParams } from 'react-router-dom';
import './Habitation.css';
import { Error404 } from '.';

const Habitation = () => {
	const { data, loading, error } = useFetch(process.env.REACT_APP_FETCH_PATH);
	let params = useParams();
	let habitationInfos = false;

	if (error) {
		console.log(error);
	}

	if (data) {
		habitationInfos = data.find((e) => e.id === params.id);
		// If id not found, redirect to 404 page
		if (!habitationInfos) {
			return <Error404 />;
		}
	}

	return (
		<>
			{loading && <Loader />}
			{habitationInfos && (
				<section className="habitation">
					<Gallery pictures={habitationInfos.pictures} />

					<div className="habitation__infos">
						<div className="habitation__infos__topBlock">
							<h1 className="habitation__infos__topBlock__title">{habitationInfos.title}</h1>
							<span className="habitation__infos__topBlock__location">{habitationInfos.location}</span>
							<ul>
								{habitationInfos.tags.map((e, i) => (
									<Tag key={i} title={e} />
								))}
							</ul>
						</div>

						<div className="habitation__infos__topBlock__right">
							<div className="habitation__infos__topBlock__owner">
								<span className="habitation__infos__topBlock__ownerName">
									<p>{habitationInfos.host.name.split(' ')[0]}</p>
									<p>{habitationInfos.host.name.split(' ')[1]}</p>
								</span>
								<img src={habitationInfos.host.picture} alt="Owner avatar" className="habitation__infos__topBlock__ownerAvatar" />
							</div>

							<div className="habitation__infos__tagsAndRating">
								<Rating score={habitationInfos.rating} />
							</div>
						</div>
					</div>

					<div className="habitation__infos__main">
						<DropDown title="Description" content={habitationInfos.description} type="small" />
						<DropDown
							title="Équipements"
							content={habitationInfos.equipments.map((e, i) => (
								<p key={i}>{e}</p>
							))}
							type="small"
						/>
					</div>
				</section>
			)}
		</>
	);
};

export default Habitation;
