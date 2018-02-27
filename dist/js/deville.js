$(function() {

    // Change HTML class
    $('html').removeClass('no-js').addClass('js');


    // Toggler
    $('[data-toggle]').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        var $target = $($(this).attr('href'));
        $target.toggleClass('is-active');
    });

    // Lightbox
    $('[data-gallery-item]').featherlightGallery({
        openSpeed: 300
    });

});