var myLogoutFunc = function () {
	Session.set('nav-toggle', '');
	FlowRouter.go('/');
};

AccountsTemplates.configure({
	confirmPassword: false,
	// privacyUrl: 'privacy'
	onLogoutHook: myLogoutFunc
});

AccountsTemplates.addFields([
  {
  	_id: 'firstName',
  	type: 'text',
  	displayName: 'First Name',
  	placeholder: 'First Name',
  	required: true
  },

  {
  	_id: 'lastName',
  	type: 'text',
  	displayName: 'Last Name',
  	placeholder: 'Last Name',
  	required: true
  }
]);