gsap.utils.toArray('#project .img').forEach(function (imgBox) {
    gsap.timeline({
        scrollTrigger: {
            trigger: imgBox,
            start: '50% 100%',
            toggleClass: { 'targets': imgBox, className: 'active' },
            scrub: 1
        }
    })
})

gsap.utils.toArray('#project .text').forEach(function (imgText) {
    gsap.timeline({
        scrollTrigger: {
            trigger: imgText,
            start: '50% 80%',
            end: '100% 0%',
            toggleClass: { 'targets': imgText, className: 'active' },
            scrub: 1
        }
    })
})

$('#project .nav li a').click(function (e) {
    e.preventDefault()

    $('#project .nav li a').removeClass('on');
    $(this).addClass('on');

    $('#project .img').removeClass('active')
    $('#project .text').removeClass('active')

    $('#project .project_coment li').removeClass('on')
    $('#project .project_num li').removeClass('on')

    let idx = $(this).parent().index();
    let margin = idx * -100 + '%'

    setTimeout(function () {
        $('#project .img ul').css({ 'margin-left': margin })
        $('#project .img').addClass('active')
    }, 350);

    setTimeout(function () {
        $('#project .text').addClass('active')
        $('#project .project_coment li').eq(idx).addClass('on')
        $('#project .project_num li').eq(idx).addClass('on')
    }, 850)
})


