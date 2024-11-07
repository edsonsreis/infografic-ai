// SCRIPTS

$(document).ready(function () {
    $('.overlay,.modal_item_header_close').click(function () {
        $('.overlay').fadeOut();
        $('.modal').fadeOut();
        $('.modal_item').slideUp();
        return false;
    });
    $('.item,.item_mobile').click(function () {
        $('.overlay').fadeIn();
        $('.modal').fadeIn();
        $('.modal_item:eq(' + $(this).index() + ')').slideDown();
        return false;
    });
});