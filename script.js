$(document).on("scroll", function() {

    if ($(document).scrollTop() > 100) {
        $(".navbar").addClass("scrolling");
    } else {
        $(".navbar").removeClass("scrolling");
    }

});

$(document).ready(function() {
  function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }
  $("a").click(function() {
    var href = $(this).attr('href').replace('#', '')
    scrollToAnchor(href);
  });     
});

                $("form :input").each(function(index, elem) {
                var eId = $(elem).attr("id");
                var label = null;
                if (eId && (label = $(elem).parents("form").find("label[for=" + eId + "]")).length == 1) {
                $(elem).attr("placeholder", $(label).text());
                $(label).hide();
                }
                });