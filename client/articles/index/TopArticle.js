
Template.TopArticle.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe('articles');
	});
});

Template.TopArticle.helpers({
	topArticle: () => {
		if (Session.get('tag')) {
			return null
		} else {
			return Articles.findOne({}, {sort: {createdAt: -1}})
		}
	}
})