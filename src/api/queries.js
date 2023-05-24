import axios from 'axios';
import { useQuery } from 'react-query';

export function useGetProducts() {
	return useQuery('templates', () => {
		return axios
			.get(
				'https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products/'
			)
			.then((response) => {
				return response.data;
			});
	});
}
