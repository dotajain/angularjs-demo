import template from './userDetails.html';

export default {
	template: template,
	bindings: { 
    user: '<', 
    onUpdate: '&' 
  }
}
