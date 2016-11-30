Meteor.publish('articles', function () {
	return Articles.find({});
});


// simply for performance (only subscribe to article you are showing)
Meteor.publish('singleArticle', function (id) {
	// simply checks that this is a string
	check(id, String);
	return Articles.find({_id: id});
});