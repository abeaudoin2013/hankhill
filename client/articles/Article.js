
Template.Article.helpers({

});

Template.Article.onRendered(function () {
  $(".summernote").each(function (i, div) {
  	var text = $(div).data("body");
  	$(div).find(".child").html(text);
  });
});