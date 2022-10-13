$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 80,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 80,
            center: false
        },
        600: {
            items: 2,
            margin: 50,
        },
        1000: {
            items: 3
        }
    }
})


// parallax

let banner_img = document.querySelector('.banner-img')
let banner_text = document.querySelector('.banner-text')
// console.log(banner_img)

window.addEventListener("scroll", () => {
    let offsetY = window.scrollY
    // console.log(offsetY)
    banner_img.style.transform = `translateY(${offsetY * 0.1}px )`
    // console.log(banner_img.style.transform = `translateY(${offsetY * 0.1}px )`)
    // banner_text.style.transform = `translateY(${offsetY * 0.1}px )`
})


// when i target 
// let hamburger = document.querySelector('#hamburger its not working property ')


let hamburger = document.querySelector('#check')
console.log(hamburger)
let toggle = document.querySelector('.navigation')
console.log(toggle)

hamburger.addEventListener("click", () => {
    // console.log('this is btn')
    toggle.classList.toggle('active')
})

//popup 
let popup = document.querySelector('.popup-parent')
setTimeout(() => {
    popup.style.opacity = '1'
    popup.style.visibility = 'visible'
}, "3000")

let close = document.querySelector('.close-btn').addEventListener('click', function () {
    popup.style.opacity = '0'
    popup.style.visibility = 'hidden'
})


// for scroll

let nav = document.querySelector('nav').offsetHeight
console.log(nav)
// document.documentElement('--scroll-padding')
document.documentElement.style.setProperty('--scroll-padding', nav + 'px')
// document.documentElement.style.setProperty('--scroll-padding', nav)
console.log(

    document.documentElement.style.setProperty('--scroll-padding', nav + 'px')

)