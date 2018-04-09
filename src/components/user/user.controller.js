export default class UserController {
	constructor(userService) {
		'ngInject';
		this.userService = userService;
		this.user = null;
	}
	// initialize users
	$onInit = () => {
		this.userService.get().then((users) => {
			this.users = users;
		});
	};

	// show user details
	updateUserDetail = (user) => {
		this.user =  this.user ? null : user;
	};

}
