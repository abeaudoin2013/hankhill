
Template.ArticleSnip.events({
	'click .toggle-front': function () {
		Meteor.call('toggleFrontPage', this.article._id, this.article.onFrontPage)
	},

	'click .Article-snip--tag': function () {
		Session.set('tag', $(this)[0].name);
		FlowRouter.go('home');
	}

});