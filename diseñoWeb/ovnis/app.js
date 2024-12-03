//Registrar plugin
gsap.registerPlugin('ScrollTrigger')


//------------- LOGO


gsap.from('.logo-img', {
    opacity: 0,
    x: -100
})


//-------------- Branding



gsap.from('.logo div', {
    opacity: 0,
    x: 200
})

//-------------- Nav

const menu_items = document.querySelector('.menu-items');

gsap.from(menu_items.children, {
    opacity: 0,
    y: -100,
    duration: 0.25,
    delay: 0.5,
    stagger: {
        amount: 1,

    }

})

//-------------- Title

gsap.utils.toArray('.title').forEach(title => {
    gsap.fromTo(title, {
        opacity: 0,
        y: -200,
        x: -300,
        delay: 1
    }, {
        y: 0,
        x: 0,
        opacity: 1,
        scrollTrigger: title

    })
});







//---------------- Star
gsap.utils.toArray('.star').forEach(star => {
    gsap.fromTo(star, {
        opacity: 0,
        x: 300,
        rotation: 0,
        delay: 1
    }, {
        x: 0,
        opacity: 1,
        rotation: 450,
        duration: 5,

        scrollTrigger: star

    })
});