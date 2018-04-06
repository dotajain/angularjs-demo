export default class UserController {
	constructor(userService) {
		'ngInject';
		this.userService = userService;
		this.user = null;
	}

	$onInit = () => {
		this.userService.get().then((users) => {
			this.users = users;
		});
	};

	showUserDetails = (user) => {
		this.user =  user;
	};

	hideUserDetails = () => {
		this.user = null;
	}
}
