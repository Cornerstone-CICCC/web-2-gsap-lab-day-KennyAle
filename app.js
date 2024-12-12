gsap.registerPlugin(ScrollTrigger);

const section1 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: '.section1',
            start: 'center center',
        }
    }
)

section1.from('.section1 .content h1 span:nth-child(2)', { x: '100vw', duration: 1 })
    .from('.section1 .content h1 span:nth-child(1)', { x: '-100vw', delay: .4 }, '<')
    .from('.section1 .content p', { rotate: '30deg', transformOrigin: 'top left', opacity: 0, duration: .5 })
    .from('.section1 .content img', { y: '100vh' })

const section2 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: '.section2',
            start: 'center center',
            end: 'center top',
            toggleActions: 'play none none reverse'
        }
    }
)

section2.from('.section2 div h2 span', { y: '-100vh', stagger: .2 })
    .from('.section2 div p', { scale: 0, opacity: 0 })

const section3 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: '.horizontal-sections',
            start: 'center center',
            scrub: true,
            pin: true
        }
    }
)

section3.from('.section3 div h2', { x: '-100vw', scale: 20 })
    .to('.section3 div p span', { background: 'white', color: 'black', duration: 0 }, '<')
    .from('.section3 div p span', { y: '100vh', stagger: .2 })
    .to('.section3', { xPercent: '-100' })
    .to('.section4', { xPercent: '-100' }, '<')
    .from('.portfolio-item', { x: '100vw', stagger: .2 }, '<')

const section5 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: '.section5',
            start: 'center center',
            scrub: true,
            pin: true
        }
    }
)
const h2 = document.querySelector('.section5 div h2')

const letters = h2.textContent.split('')
h2.innerHTML = ''
letters.forEach(letter => {
    span = document.createElement('span')
    if (letter == ' ') {
        span.innerHTML = '&nbsp;'
        h2.append(span)
    } else {
        span.innerHTML = letter
        h2.append(span)
    }
})

section5.from('.section5 div span', { y: '-100vh', opacity: 0, stagger: .06 })
    .from('.section5 div p', { y: '50', opacity: 0, duration: .5 })
    .from('.section5 .contact-btn', { scale: 0 })
    .to('.section5', { backgroundColor: 'black' })
    .from('.section5', { backgroundPosition: '135% 90%' }, '<')
