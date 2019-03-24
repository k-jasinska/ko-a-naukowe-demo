(function () {
    $(document).ready(() => {
        $('#slideshow .slick').slick({
            autoplay: true,
            // fade: true,
            autoplaySpeed: 3000,
            speed: 1000,
            dots: true,
        });
    });
})();

// <!-- do scrolla -->
/*
<!-- <script>
    jQuery(function ($) {
        $.scrollTo(0);
        $('.down').click(function () {
            $.scrollTo($('.nav'), 500);
        });
        $('#link1').click(function () {
            $.scrollTo($('#o_mnie'), 500);
        });
        $('#link2').click(function () {
            $.scrollTo($('#kursy'), 500);
        });
        $('#link3').click(function () {
            $.scrollTo($('#umiejetnosci'), 500);
        });
        $('#link4').click(function () {
            $.scrollTo($('#wiecej'), 500);
        });
        $('#link5').click(function () {
            $.scrollTo($('#map'), 500);
        });
        $('.scrollup').click(function () {
            $.scrollTo($('body'), 1000);
        });
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) $('.scrollup').fadeIn();
        else $('.scrollup').fadeOut();
    });
</script> -->
*/