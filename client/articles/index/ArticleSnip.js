Template.ArticleSnip.onRendered(function () {
  $(".ArticleSnip--summernote").each(function (i, div) {
  	var text = $(div).data("body");
  	$(div).find(".ArticleSnip--summernote-child").html(text);
  	$(div).find(".ArticleSnip--summernote-child").html($(div).find($(".ArticleSnip--summernote-child")).text().split(" ").slice(0, 25).join(" ") + "...");
  });
});


Template.ArticleSnip.events({
	'click .toggle-front': function () {
		Meteor.call('toggleFrontPage', this.article._id, this.article.onFrontPage)
	}
})