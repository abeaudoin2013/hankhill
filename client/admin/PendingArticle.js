Template.PendingArticle.onCreated(function () {
	var self = this;
	self.autorun(function () {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleArticle', id);
	});
});

Template.PendingArticle.helpers({

	article: () => {
		var id = FlowRouter.getParam('id');
		return Articles.findOne({_id: id});
	},
	approve: () => {
		var id = FlowRouter.getParam('id');
	  var article = Articles.findOne({_id: id});
	  return !article.approved
	}
	
});

Template.PendingArticle.events({
	"click .toggle-approve": function () {
		var id = FlowRouter.getParam('id');
		var article = Articles.findOne({_id: id});
		Meteor.call('toggleApproval', id, article.approved);
	}
})