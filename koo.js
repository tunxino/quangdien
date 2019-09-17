$(window).on('load', function() {
    $(window).scroll(function(event) {
        // console.log('xu ly');
        // console.log($(this).scrollTop());
        var vitri = $(this).scrollTop();
        if (vitri >= 800) {
            console.log('dc r')
            $('.menu').addClass('bienhinh');
        } else {
            $('.menu').removeClass('bienhinh');
        }
    });
});