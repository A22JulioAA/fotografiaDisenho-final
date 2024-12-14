
let horizontalSection = document.querySelector('.horizontal')

console.log(horizontalSection.scrollWidth)

// gsap.to('.horizontal', {
//     x: () => horizontalSection.scrollWidth * -1,
//     xPercent: 100,
//     scrollTrigger: {
//         trigger: '.horizontal',
//         start: 'center center',
//         end: '+=3000px',
//         pin: '.container',
//         scrub: true,
//         markers: true,
//         invalidateOnRefresh: true,
//     }
// })

// SCROLL NAVIGATION

const menuNavegacion = document.getElementById('menu-navegacion')
const body = document.body

window.addEventListener('scroll', () => {
    const scrollPosition  = window.scrollY;

    if(scrollPosition >= window.innerHeight) {
        menuNavegacion.style.top = 'unset'
        menuNavegacion.style.bottom = '0'
        menuNavegacion.classList.add('fixed')
        body.classList.add('menu-fijo-activo');
        
    } else {
        menuNavegacion.classList.remove('fixed')
        menuNavegacion.style.top = '35vh'
        body.classList.remove('menu-fijo-activo');
    }
}
);