Meteor.subscribe('articles');

Template.Articles.helpers({

	articles: () => {
		return Articles.find({});
	}

});