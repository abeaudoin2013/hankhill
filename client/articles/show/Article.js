
Template.Article.onRendered(function () {
  $(".summernote").each(function (i, div) {
  	var text = $(div).data("body");
  	$(div).find(".child").html(text);
  });
});

Template.Article.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe('articles');
	});
});

Template.Article.helpers({

	article: () => {
		var id = FlowRouter.getParam('id');
		return Articles.findOne({_id: id});
	}

});