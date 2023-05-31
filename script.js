$(function () {
    $('.navbar').hide()
    $('.titulo').hide()
    $('.cards').hide()
    
    setTimeout(() => {
        $('.navbar').slideDown(700)
    }, 1000);

    setTimeout(() => {
        $('.titulo').slideDown(500)
    }, 1500);

    setTimeout(() => {
        $('.cards').fadeIn(500)
    }, 2225);
});