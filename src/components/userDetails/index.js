import userDetailsComponent from './userDetails.component';

const userDetailsModule = angular.module('app.userDetails', []);

// loading components, services, directives, specific to this module.
userDetailsModule.component('userDetails', userDetailsComponent);

// export this module
export default userDetailsModule;
