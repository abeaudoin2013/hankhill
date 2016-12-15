Template.Articles.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe('articles');
	});
});

Template.Articles.helpers({

	articles: () => {
		if (Session.get('tag')) {
			$("#articles-tag").html("Articles tagged: " + "<span class='articles-tag-span-wrapper'><span class='articles-tag-span'>" + Session.get('tag') + "</span><i class='fa fa-close articles-tag-close'></i></span>");
		  return Articles.find({tags: {name: Session.get('tag')}}, {sort: {createdAt: -1}})
		} else { 
			return Articles.find({}, {sort: {createdAt: -1}, skip: 1});
		}
	}

});

Template.Articles.events({

	"click .articles-tag-close": function () {
		Session.set('tag', '');
		$("#articles-tag").html('');
	}

});