Template.Authors.onCreated(function() {
	this.autorun(() => {
		// arrow preserves this
		this.subscribe('allUsers');
	})
});

Template.Authors.helpers({
  
  users: function () {
		return Meteor.users.find()
	},
	isAuthor: function () {
		// pass current user that's being looped over
		return Roles.userIsInRole(this._id, 'author')
	}

});