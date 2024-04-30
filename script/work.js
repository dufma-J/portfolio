let dir1 = -1
let dir2 = 1

let speed = 1

let loc1 = 1
let loc2 = 1

let liHeight1 = 0
let liHeight2 = 0

let windowWidth = $(window).width()

$('.work-inner ul.list1 li:not(.etc)').each(function () {
    if (windowWidth < 1200) {
        h1 = $(this).innerWidth()
        liHeight1 += h1
    }
    else {
        h1 = $(this).innerHeight()
        liHeight1 += h1
    }
})
$('.work-inner ul.list2 li:not(.etc)').each(function () {
    if (windowWidth < 1200) {
        h2 = $(this).innerWidth()
        liHeight2 += h2
    }
    else {
        h2 = $(this).innerHeight()
        liHeight2 += h2
    }
})



function flowBanner1() {
    loc1 += speed * dir1

    if (loc1 <= -liHeight1) {
        loc1 = 0
    }
    else if (loc1 >= 0) {
        loc1 = -liHeight1
    }

    if (windowWidth < 1200) {
        $('#work ul.list1').css({ 'left': loc1 })
    }
    else {
        $('#work ul.list1').css({ 'top': loc1 })
    }

}
function flowBanner2() {
    loc2 += speed * dir2

    if (loc2 <= -liHeight2) {
        loc2 = 0
    }
    else if (loc2 >= 0) {
        loc2 = -liHeight2
    }

    if (windowWidth < 1200) {
        $('#work ul.list2').css({ 'left': loc2 })
    }
    else {
        $('#work ul.list2').css({ 'top': loc2 })
    }

}
setInterval(flowBanner1, 10)
setInterval(flowBanner2, 10)


// 호버하면 멈춤, 리브하면 재생
$('#work ul.list1').mouseenter(function () { speed = 0 })
$('#work ul.list1').mouseleave(function () { speed = 1 })

$('#work ul.list2').mouseenter(function () { speed = 0 })
$('#work ul.list2').mouseleave(function () { speed = 1 })

$('#work ul li').mouseenter(function () {
    let text = $(this).find('a').attr('data-text');
    let bgColor = $(this).find('a').attr('data-bgcolor');
    let color = $(this).find('a').attr('data-color');

    $('#work .coment p').each(function () {
        let find = $(this).attr('data-find');
        if (text === find) {
            $(this).css('display', 'block');
        }
    });

    $('.wrap_wrap').css('background-color', bgColor);
    $('.wrap_wrap').css('color', color);
    $('#work h2').text(text);

    if (color === '#ffffff') {
        $('.wrap_wrap .list li img').css('filter', 'invert(100%)');
    }
}).mouseleave(function () {
    $('#work h2').text('WORK');
    $('#work .coment p').css('display', 'none');
    $('.wrap_wrap w1').css('background-color', 'var(--point1-color)');
    $('.wrap_wrap w1').css('color', '#000000');
    $('.wrap_wrap .list li img').css('filter', 'none');
});
