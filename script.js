const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


let tl = gsap.timeline();
tl.to(".page1",{
    y:"100vh",
    scale:.4,
    duration:0,
  

})
tl.to(".page1",{
    y:"0vh",
    duration:1,
    delay:1,
})

tl.to(".page1",{
    rotate:360,
    scale:1,
    duration:.4

    // y:"100vh"
})