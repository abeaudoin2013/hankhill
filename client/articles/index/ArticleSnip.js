Template.ArticleSnip.onRendered(function () {
  // console.log("asldjkf");
  

  
  if (first) {
    $(".ArticleSnip--summernote").each(function (i, div) {
      var text = $(div).find(".ArticleSnip--summernote-child").text();
      $(div).find(".ArticleSnip--summernote-child").html(text);
      var html = $(div).find(".ArticleSnip--summernote-child").text();
      $(div).find(".ArticleSnip--summernote-child").html(html.split(" ").slice(0, 25).join(" ") + "...");
      // $(div).find(".ArticleSnip--summernote-child").html($(div).find($(".ArticleSnip--summernote-child")).text().split(" ").slice(0, 25).join(" ") + "...");
    });
    first = false;
  }
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

var first = true;