// rook-book 무한루프 슬라이드
let itemWidth3 = 0   //각 아이템 크기 값
let dir3 = -1        //방향
let speed3 = 1       //흘러가는 속도
let loc3 = 1         //위치값
let liWidth3 = 0     //전체 아이템의 너비값

$('.graphic_track ul li:not(.etc)').each(function () {
    w3 = $(this).innerWidth()    //각 아이템의 너비값
    liWidth3 += w3    //각 아이템의 너비값을 하나씩 더해 전체 너비값을 구함
})

function flowBanner3() {
    //전체 아이템을 부모 ul의 위치를 움직이게 하기 위해서 위치값 구하기
    loc3 += speed3 * dir3

    //위치값이 전체 너비보다 크면 맨 앞으로 이동
    if (loc3 <= -liWidth3) {
        loc3 = 0
    }
    //위치값이 0이면 맨 마지막으로 이동
    else if (loc3 >= 0) {
        loc3 = -liWidth3
    }

    $('.graphic_track ul').css({ 'left': loc3 })
}
setInterval(flowBanner3, 10)

$('.graphic_track ul li a').mouseenter(function () {
    speed3 = 0
})
$('.graphic_track ul li a').mouseleave(function () {
    speed3 = 1
})

// // splide
// const carouselElementsLtl = document.querySelectorAll(".ltl");
// const carouselElementsrtl = document.querySelectorAll(".rtl");

// // 각 캐러셀 요소를 반복합니다.
// carouselElementsLtl.forEach((carouselElement) => {
//     // 각 캐러셀에 대해 새 슬라이드 인스턴스를 초기화합니다.
//     const splide = new Splide(carouselElement, {

//         type: "loop",
//         drag: true,
//         autoWidth: true,
//         gap: 30,
//         pagination: false,
//         arrows: false,
//         autoScroll: {
//             speed: 1,
//             pauseOnHover: false,
//         },
//     });

//     // 스플릿 인스턴스 마운트
//     splide.mount(window.splide.Extensions);
// });
// carouselElementsrtl.forEach((carouselElement) => {
//     // 각 캐러셀에 대해 새 슬라이드 인스턴스를 초기화합니다.
//     const splide = new Splide(carouselElement, {
//         direction: 'rtl',
//         type: "loop",
//         drag: true,
//         autoWidth: true,
//         gap: 30,
//         pagination: false,
//         arrows: false,
//         autoScroll: {
//             speed: 3,
//             pauseOnHover: true,
//         },
//     });

//     // 스플릿 인스턴스 마운트
//     splide.mount(window.splide.Extensions);
// });

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});