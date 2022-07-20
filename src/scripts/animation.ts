import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const timeline=(className:string)=> gsap.timeline({
    scrollTrigger:{
    trigger: className,
    scrub:true
    }
})

timeline(".features").from(".features__card", {
    opacity:.2,
    duration:20
})

timeline(".goal__wrapper").from(".goal__goals", {
    scale:0.9,
    duration:500
});



timeline('.subscription__wrapper').from(".subscription", {
    x:"-20%",
    duration:0.5
});


timeline('.testimonials__wrapper').from(".testimonial__card", {
    opacity:0.2,
    duration:500
});
