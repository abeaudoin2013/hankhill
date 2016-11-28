Template.Articles.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe('articles');
	});
});

Template.Articles.helpers({

	articles: () => {
		return Articles.find({}, {sort: {createdAt: -1}});
	}

});