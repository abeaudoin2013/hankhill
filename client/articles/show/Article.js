Template.Article.onCreated(function () {
	var self = this;
	self.autorun(function () {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleArticle', id);
	});
});

Template.Article.helpers({

	article: () => {
		var id = FlowRouter.getParam('id');
		return Articles.findOne({_id: id});
	},

	renderText: (text) => {

		// have to destringify html 
		$("#body").html(text);

	},
	author: () => {
		var id = FlowRouter.getParam('id');
		var article = Articles.findOne({_id: id});
		var author = article.author;
	  var currentUserId = Meteor.user()._id;
	  if (author === currentUserId) {
	  	return true;
	  } else {
	  	return false;
	  }
	}
});

Template.Article.events({

	'click .Article--tag ': function () {
		Session.set('tag', $(this)[0].name);
		FlowRouter.go('home');
	}

});