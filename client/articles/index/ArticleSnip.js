// Template.ArticleSnip.helpers({
//   snippet: function () {
//   	var separation = this.article.body.match(/<.+?>/g);
//   	console.log(separation);
//   	// console.log(this.article.body.split("<p";
//   }
// });
// Template.ArticleSnip.onCreated(function () {
// 	var self = this;
// 	self.autorun(function () {
// 		var id = self.data.article._id
// 		self.subscribe('singleArticle', id);
// 	});
// });

Template.ArticleSnip.onRendered(function () {
  var id = this.data.article._id;
  console.log($("#article-" + id).text());
});

Template.ArticleSnip.events({
	'click .toggle-front': function () {
		Meteor.call('toggleFrontPage', this.article._id, this.article.onFrontPage)
	},

	'click .Article-snip--tag': function () {
		Session.set('tag', $(this)[0].name);
		FlowRouter.go('home');
	}

});

var items = "lkdsjf";