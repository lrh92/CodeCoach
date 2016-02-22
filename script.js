$(document).on("scroll", function() {

    if ($(document).scrollTop() > 100) {
        $(".navbar").addClass("scrolling");
    } else {
        $(".navbar").removeClass("scrolling");
    }

});