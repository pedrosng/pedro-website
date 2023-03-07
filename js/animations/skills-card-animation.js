import gsap from "gsap";

const t1 = gsap.timeline({defaults:{duration:1}})

export const skilsCardAnimation = () => {
    t1.fromTo(".skills-card", {y:-500},{y:0});
} 