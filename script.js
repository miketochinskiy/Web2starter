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

gsap.from("#Planet1", {
  repeat:-1,
  rotate: 360,
  yoyo:true,
  duration: 6,
  scale: .001,
})
gsap.from("#Planet2", {
  repeat:-1,
  rotate: -180,
  yoyo:true,
  scale: .001,
  duration: 7,
  x: 100,
  y:200,
})

//gsap.to(".stars", {
//  repeat:-1,
//  scale: .1,
//  yoyo: true,
// })

gsap.to("#S1", {
  repeat:-1,
  scale: .1,
  yoyo: true,
  duration: .94,
})
gsap.to("#S2", {
  repeat:-1,
  scale: .1,
  yoyo: true,
  duration: 1.46,
})
gsap.to("#S3", {
  repeat:-1,
  scale: .1,
  yoyo: true,
  duration: 1.75,
})
gsap.to("#S4", {
  repeat:-1,
  scale: .1,
  yoyo: true,
  duration: 1.3335,
})
gsap.to("#S5", {
  repeat:-1,
  scale: .1,
  yoyo: true,
  duration: 1.64,
})
gsap.to("#S6", {
  repeat:-1,
  scale: .1,
  yoyo: true,
  duration: .65,
})

//gsap.from(".lightning", {
//  repeat:-1,
// ridged:true,
//  stagger: {
//  amount: .1,
//  },
//  scale: .95,
// })