import { USERS } from '../constants/urls';

export default class UserService {
	constructor($http) {
		'ngInject';
		this.$http = $http;
	}

	get = () => {
		return this.$http.get(USERS)
			.then((response) => {
				return response.data;
			});
	};
	
}
