//loader
$(window).on("load", ()=> {
    $(".loader-wrapper").fadeOut(1000);
})

//navigation
$(".navigation__display").on("click", ()=> {
    if($(".navigation__display").hasClass("active")) {
        $(".navigation__display").removeClass("active");
        $(".navigation__container").css("transform", "scale(1)");
        $(".navigation__list").css("width", "0");
        $(".navigation__link").css({
            "opacity": "0", 
            "visibility": "hidden"
        });
        $(".media__link").css({
            "opacity": "0", 
            "visibility": "hidden"
        })
    }
    else {
        $(".navigation__display").addClass("active");
        $(".navigation__container").css("transform", "scale(60)");
        $(".navigation__list").css("width", "100vw");
        $(".navigation__link").css({
            "opacity": "1", 
            "visibility": "visible"
        });
        $(".media__link").css({
            "opacity": "1", 
            "visibility": "visible"
        });
    }
})