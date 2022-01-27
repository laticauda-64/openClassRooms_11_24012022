/**
 * This is a custom hook for fetching datas from any url
 * You can re-use this in multiple components
 */

import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		/**
		 * Timeout function is not mandatory here, you can just play with it to simulate 'lag'
		 * and debug you loader
		 */
		setTimeout(() => {
			fetch(url)
				.then((response) => response.json())
				.then(setData)
				.catch(setError)
				.finally(() => setLoading(false));
		}, 1000);
	}, [url]);

	return { data, error, loading };
};
