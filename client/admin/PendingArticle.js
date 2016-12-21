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
	}
	
});