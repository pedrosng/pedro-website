import gsap from 'gsap';
import '../../css/intro-animation.css'

const setUpHtmlElements = () => {
    $('.intro')
    .append(
        '<div class="intro-text">' +
            '<h1 class="hide">' +
                '<span class="text">pedro G</span>' +
            '</h1>' +
            '<h1 class="hide">' +
                '<span class="text">software Developer</span>' +
            '</h1>' +
        '</div>'
    )
    .after(
        '<div class="slider"></div>'
    );
}

const startUpAnimation = () => {

    const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
    
    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25});
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5});
    tl.to(".intro", {y: "-100%", duration: 1}, "-=1")
    
    tl.fromTo('ul', {opacity: 0}, { opacity: 1, duration:1 })
    tl.fromTo('.logo',{opacity: 0}, {opacity: 1, duration:1 }, '-=1')
    tl.fromTo('.content',{opacity: 0}, {opacity: 1, duration:1}, '-=.5' )
}

const onContentChangeAnimation = () => {
    $('.nav-links a').click(()=>{
        gsap.fromTo('.content', { opacity: 0 }, { opacity: 1, duration: 2 });
    });
}


export const setUpTextAnimations = () => {
    setUpHtmlElements();
    startUpAnimation();
    onContentChangeAnimation();
}




