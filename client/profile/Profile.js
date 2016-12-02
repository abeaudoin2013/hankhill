Template.Profile.helpers({
	admin: () => {
		return Roles.userIsInRole(Meteor.userId(), 'admin');
	}
});