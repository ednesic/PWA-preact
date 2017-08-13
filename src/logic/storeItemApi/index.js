import 'isomorphic-fetch';

export class StoreItemApi {

	static getCategories() {
		const headers = {
			method: 'GET',
			mode: 'cors',
			header: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json'
			}
		};
		return fetch('http://localhost:3000/categories', headers)
			.then(data => data.json())
			.catch(err => console.error(err));
	}

	static getHighlights() {
		const headers = {
									 method: 'GET',
		               mode: 'cors',
									 header: {
							     'Access-Control-Allow-Origin': '*',
							     'Content-Type': 'application/json'
								 }
							 };
		return fetch('http://localhost:3000/products', headers)
			.then(data => data.json())
			.catch(err => console.error(err));
	}

}
