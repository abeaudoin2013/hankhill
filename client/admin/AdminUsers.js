import moment from 'moment';

Template.AdminUsers.onCreated(function() {
	this.autorun(() => {
		// arrow preserves this
		this.subscribe('allUsers');
	})
});

Template.AdminUsers.helpers({
	users: function () {
		return Meteor.users.find()
	},
	userEmail: function () {
		return this.emails[0].address;
	},
	isAdmin: function () {
		// pass current user that's being looped over
		return Roles.userIsInRole(this._id, 'admin')
	},
	isAuthor: function () {
		// pass current user that's being looped over
		return Roles.userIsInRole(this._id, 'author')
	},
	dateFormat: function () {
		return moment(this.createdAt).format('MMMM D YYYY');
	},
	editMode: function () {
		return Session.get('currentUser') ? 'edit-mode' : '';
	},
	currentEdit: function () {
		let user = Session.get('currentUser');
		return user._id === this._id;
	}
});

Template.AdminUsers.events({

	'click .user_id': function () {
		Session.set('currentUser', this);
	},

	'click .toggle-admin': function () {
		Meteor.call('toggleAdmin', this._id);
	},
	'click .close-edit-mode': function () {
		Session.set('currentUser', null);
	}
});