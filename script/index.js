$('.mobile-menu').on('click', '.icon', function (e) {
    e.preventDefault();

    var $menu = $('.mobile-menu .menu');
    if ($(this).hasClass('on')) {
        $menu.css({ 'left': '100%' });
        $(this).removeClass('on');
    } else {
        $menu.css({ 'left': '0%' });
        $(this).addClass('on');
    }
});

$('.mobile-menu .menu ul li a').click(function () {
    var $menu = $('.mobile-menu .menu');
    $menu.css({ 'left': '100%' });
    $('.mobile-menu .icon').removeClass('on');
});


//home --------------------------------------------------
let links = gsap.utils.toArray('nav ul li a')
links.forEach(link => {
    let elem = document.querySelector(link.getAttribute('href'))

    ScrollTrigger.create({
        trigger: elem,
        start: "top center",
        end: "bottom center",
        onToggle: self => setActive(link)
    })

    let linkST = ScrollTrigger.create({
        trigger: elem,
        start: "top top"
    })

    link.addEventListener('click', e => {
        e.preventDefault()
        gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" })
        links.forEach(otherLink => {
            otherLink.classList.remove('on');
        });
        link.classList.add('on');
    })
})

function setActive(link) {
    links.forEach(el => el.classList.remove('on'))
    link.classList.add('on')
}


// nav 아래로 내려가면 nav 숨기기
const showNav = gsap.from('nav', {
    yPercent: -200,
    paused: true,
    duration: 0.2
}).progress(1)
ScrollTrigger.create({
    start: "top top",
    end: 9999,
    onUpdate: (self) => {
        self.direction === -1 ? showNav.play() : showNav.reverse()
    }
})


// 부드러운 스크롤 애니메이션 구현
const lenis = new Lenis()
lenis.on('scroll', (e) => {
    console.log(e)
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


// banner 
let dirA = -1
let speedA = 1
let loc = 1
let liWidth = 0

$('#banner ul li:not(.etc)').each(function () {
    w = $(this).innerWidth()
    liWidth += w
})

function Banner() {
    loc += speedA * dirA

    if (loc <= -liWidth) {
        loc = 0
    }
    else if (loc >= 0) {
        loc = -liWidth
    }

    $('#banner ul').css({ 'left': loc })
}
setInterval(Banner, 10)



const carouselElementsLtl = document.querySelectorAll(".ltl");
const carouselElementsrtl = document.querySelectorAll(".rtl");

// 각 캐러셀 요소를 반복합니다.
carouselElementsLtl.forEach((carouselElement) => {
    // 각 캐러셀에 대해 새 슬라이드 인스턴스를 초기화합니다.
    const splide = new Splide(carouselElement, {

        type: "loop",
        drag: true,
        autoWidth: true,
        gap: 30,
        pagination: false,
        arrows: false,
        autoScroll: {
            speed: 1,
            pauseOnHover: false,
        },
    });

    // 스플릿 인스턴스 마운트
    splide.mount(window.splide.Extensions);
});
carouselElementsrtl.forEach((carouselElement) => {
    // 각 캐러셀에 대해 새 슬라이드 인스턴스를 초기화합니다.
    const splide = new Splide(carouselElement, {
        direction: 'rtl',
        type: "loop",
        drag: true,
        autoWidth: true,
        gap: 30,
        pagination: false,
        arrows: false,
        autoScroll: {
            speed: 3,
            pauseOnHover: true,
        },
    });

    // 스플릿 인스턴스 마운트
    splide.mount(window.splide.Extensions);
});