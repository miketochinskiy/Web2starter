// Check JS is Connected
console.log('JS Connected');

gsap.from(".googleletter", {
    repeat:-1,
    x:-700,
    yoyo:true,
    stagger: {
    amount: 2,
    },
    scale: .001,
  })
  
  gsap.from(".planets", {
    repeat:-1,
    rotate: 360,
    yoyo:true,
    stagger: {
    each: .5,
    },
    scale: .001,
  })
  
  gsap.to(".stars", {
    repeat:-1,
    scale: .001,
    yoyo: true,
  })
  gsap.from(".lightning", {
    repeat:-1,
    ridged:true,
    stagger: {
    amount: .1,
    },
    scale: .95,
  })