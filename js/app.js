$(window).on("load", ()=> {
    $(".loader-wrapper").fadeOut(1000);
})

const tl = gsap.timeline();
tl.fromTo(".heading-welcome", { opacity: "0"}, { opacity: "1", transform: "scale(1.03)", duration: "1", stagger: ".35s", ease: "Power4.easeInOut"});
tl.to(".caption", {opacity: "1", duration: ".5", ease: "Power4.easeInOut"})