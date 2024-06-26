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

gsap.utils.toArray('section').forEach(item => {
    let textColor = item.getAttribute('data-TextColor');

    ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            gsap.to("nav ul li a", {
                color: textColor,
            });
            gsap.to(".icon span", {
                backgroundColor: textColor,
            });
        },
        onEnterBack: () => {
            gsap.to("nav ul li a", {
                color: textColor,
            });
            gsap.to(".icon span", {
                backgroundColor: textColor,
            });
        },
    });
});

gsap.utils.toArray('section').forEach(item => {
    let bgColor = item.getAttribute('data-BgColor');

    ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            gsap.to("section", {
                backgroundColor: bgColor,
            });
        },
        onEnterBack: () => {
            gsap.to("section", {
                backgroundColor: bgColor,
            });
        },
    });
});


// nav 아래로 내려가면 nav 숨기기
const showNav = gsap.from('nav', {
    yPercent: -250,
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


//home 페이지 별 반짝거리기
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Star {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.flickerInterval = Math.floor(Math.random() * 50) + 50;
        this.flickerCounter = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.flickerCounter++;

        if (this.flickerCounter === this.flickerInterval) {
            this.radius = getRandom(0.5, 2);
            this.color = `rgba(255, 255, 255, ${getRandom(0.3, 1)})`;
            this.flickerCounter = 0;
            this.flickerInterval = Math.floor(Math.random() * 50) + 50;
        }

        this.draw();
    }
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function spawnStars() {
    const x = getRandom(0, canvas.width);
    const y = getRandom(0, canvas.height);
    const radius = getRandom(0.5, 2);
    const color = `rgba(255, 255, 255, ${getRandom(0.3, 1)})`;
    return new Star(x, y, radius, color);
}

let stars;
function init() {
    stars = [];

    for (let i = 0; i < 200; i++) {
        stars.push(spawnStars());
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.update();
    });
}

init();
animate();


//home 페이지 마우스의 위치에 따라 요소 움직이기
$(function () {
    $(".css3d-camera").on("mousemove", function (event) {
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        $(".css3d-space").css(
            "transform",
            "rotateX(" + -mouseY + "deg) rotateY(" + -mouseX + "deg)"
        );
    });

    $(document).on("mousemove", function (event) {
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        $(".parallax_layer.p0").css(
            "-webkit-transform",
            "translate3d(" + mouseX / 20 + "px," + mouseY / 20 + "px, 0)"
        );
        $(".parallax_layer.p1").css(
            "-webkit-transform",
            "translate3d(" + mouseX / 10 + "px, " + mouseY / 10 + "px, 0)"
        );
        $(".parallax_layer.p2").css(
            "-webkit-transform",
            "translate3d(" + mouseX / 7 + "px," + mouseY / 7 + "px, 0)"
        );
        $(".parallax_layer.p3").css(
            "-webkit-transform",
            "translate3d(" + mouseX / 10 + "px," + mouseY / 10 + "px, 0)"
        );
    });
});


//마우스 커서
const $cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', function (e) {
    $cursor.style.left = e.clientX + 'px';
    $cursor.style.top = e.clientY + 'px';
});

$('a').mouseenter(function () {
    $('.cursor').css({ 'transform': 'scale(5)' })
})
$('a').mouseleave(function () {
    $('.cursor').css({ 'transform': 'scale(1)' })
})

$('.cur').mouseenter(function () {
    $('.cursor').css({ 'transform': 'scale(5)' })
})
$('.cur').mouseleave(function () {
    $('.cursor').css({ 'transform': 'scale(1)' })
})