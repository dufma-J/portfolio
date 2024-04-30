const ani1 = gsap.timeline()
ani1.from('#aboutme .s2', { duration: 5, y: 900 }, '+=1')
    .from('#aboutme .s3', { duration: 5, y: 900 }, '+=1')
    .from('#aboutme .s4', { duration: 5, y: 900 }, '+=1')
    .from('#aboutme .s5', { duration: 5, y: 900 }, '+=1')
    .from('#aboutme .s6', { duration: 5, y: 900 }, '+=1')
ScrollTrigger.create({
    animation: ani1,
    trigger: '#aboutme',
    start: 'top top',
    end: '+=3000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
})

setInterval(function () {
    $('#aboutme .keywords ul').animate({ 'margin-top': '-80px' }, function () {
        $('#aboutme .keywords ul li').first().appendTo('#aboutme .keywords ul')
        $('#aboutme .keywords ul').css({ 'margin-top': '0px' })
    })
}, 1500)

$('.send').click(function (e) {
    e.preventDefault();
    alert('봐주셔서 감사합니다.')
})



