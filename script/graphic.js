var $grid = $('.grid').imagesLoaded(function () {
    $grid.isotope({
        itemSelector: '.grid-item',
        masonry: {
            // columnWidth: '180',
            // fitWidth: true,
        }
    });
});