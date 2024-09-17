const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


document.querySelectorAll('.elem').forEach(elem => {

  let img = elem.querySelector('img')
  let tl = gsap.timeline()

  let xTransform = gsap.utils.random(-70, 70)

  tl
    .set(img, {
      transformOrigin: `${xTransform < 0 ? 0 : '50%'}`
    }, "start")
    .to(img, {
      scaleX: 0,
      scaleY: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: img,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    }, "start")
    .to(img, {
      x: `${xTransform}%`,
      ease: 'none',
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

})


document.querySelectorAll('.card').forEach(elem => {
  let tl = gsap.timeline()

  tl.to(elem, {
    scale: 0.5,
    opacity: 0,
    ease: 'power0',
    scrollTrigger: {
      trigger: elem,
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })
  
})