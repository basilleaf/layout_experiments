$(function() {
  $("li").each(function(index) {
    var base_url = "https://s3-us-west-1.amazonaws.com/marsfromspace.com/"
    var imgUrl = $(this).find("img")[0].src.split('/').pop();

    view = { imgUrl: base_url + imgUrl };
    var output = Mustache.render($("#template").html(), view);
    $(this).html(output);
  });
});