Meteor.publish('articles', function () {
	return Articles.find({author: this.userId});
})