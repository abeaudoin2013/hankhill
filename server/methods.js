Meteor.methods({
	toggleAdmin(id) {
		// if they are in role admin
		if (Roles.userIsInRole(id, 'admin')) {
			Roles.removeUsersFromRoles(id, 'admin');
		} else {
			Roles.addUsersToRoles(id, 'admin');
		}
	}
})