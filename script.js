var cur = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")

var tl = gsap.timeline()



tl.from(".nav img, .nav a", {

    y: -200,
    duration: 1,
    opacity: 0,
    stagger: 0.3,

})

tl.from(".page1 h1", {

    y: 200,
    opacity: 0,
    duration: 1,

    
})

tl.from(".page1 h3", {

    y: 200,
    opacity: 0,
    duration: 1,

    
})

tl.from(".page1 p", {

    y: 200,
    opacity: 0,
    duration: 1,

})




document.addEventListener("mousemove", function(dets){

    cur.style.left = dets.x + "px"
    cur.style.top = dets.y + "px"
    blur.style.left = dets.x - 250 + "px"
    blur.style.top = dets.y - 250 + "px"

})



gsap.to(".nav", {

    backgroundColor: "#000",
    duration: 0.5,
    height: "120px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,

    }
})







gsap.to(".main",{

    backgroundColor: "#000",

    scrollTrigger: {

        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2,
    }
})


gsap.from(".about-us img,.about-us-info", {

    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        // markers:true,
        start: "top 30%",
        end: "top 40%",
        scrub: 2,

    }



})

gsap.from(".card-container,.card", {

    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        // markers:true,
        start: "bottom 30%",
        end: "bottom 40%",
        scrub: 2,
    }

})

gsap.from(".green-div", {

    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".green-div",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 60%",
        scrub: 2,
    }

})




gsap.from("#img1", {

    y: -100,
    x: -100,

    scrollTrigger:{
        trigger: "#img1",
        scroler: "body",
        // markers: true,
        start: "top 30%",
        end: "top 20%",
        scrub: 4,

    }


})

gsap.from("#img2", {

    y: 100,
    x: 100,

    scrollTrigger:{
        trigger: "#img1",
        scroler: "body",
        // markers: true,
        start: "top 30%",
        end: "top 20%",
        scrub: 4,

    }
})

gsap.from(".formCardContainer", {

    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".green-div",
        scroller: "body",
        // markers:true,
        start: "top 0%",
        end: "top 90%",
        scrub: 4,
    }

})

