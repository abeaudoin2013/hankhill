Template.PendingArticles.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe('articles');
	});
});

Template.PendingArticles.helpers({
	articles: () => {
		return Articles.find({});
	},
	isApproved: function () {
		return this.approved.toString();
	}
});