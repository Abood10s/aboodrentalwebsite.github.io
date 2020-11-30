$(document).ready(function() {

    $(window).on('scroll', function() {
        let fromtop = $(window).scrollTop();
        console.log(fromtop);
        if (fromtop > 350) {
            $('.navbar').addClass('navanimate', 900);
        } else {
            $('.navbar').removeClass('navanimate', 2200);
        }
        if (fromtop > 350) {
            $('.firstview').animate({ 'opacity': '1' }, 900);
            $('.firstimg').animate({ 'height': '450px' }, 2200);

        }
        if (fromtop > 1050) {
            $('.secondview ').animate({ 'opacity': '1' }, 800);
            $('.secondview img').animate({ 'height': '450px' }, 2200);
        }
        if (fromtop > 390) {
            $('.up').addClass('visible');
        } else {
            $('.up').removeClass('visible');

        }
        if (fromtop > 1440) {
            $('.mailh ').animate({ 'opacity': '1' }, 1000);
            $('.mailus ').animate({ 'opacity': '1' }, 1000);
        }
        if (fromtop > 3000) {

            $('.footer').addClass('footerscale');
            $('.footh').animate({ 'opacity': '1' }, 3400);
            $('.lang').animate({ 'opacity': '1' }, 3400);
            $('.map').animate({ 'opacity': '1' }, 3400);
            $('.info').animate({ 'opacity': '1' }, 3400);
            $('.footbottom').animate({ 'opacity': '1' }, 3400);
        }
        if (fromtop > 1650) {
            $('.about').addClass('aboutscale');
            $('.abouth').animate({ 'opacity': '1' }, 2400);
            $('.information').animate({ 'opacity': '1' }, 2400);
            $('.num').animate({ 'opacity': '1' }, 2400);
            $('.aboutimg').animate({ 'opacity': '1' }, 2400);
            $('.abimg').animate({ 'opacity': '1' }, 2400);
            $('.logoss').animate({ 'opacity': '1' }, 2400);
            $('.my').animate({ 'opacity': '1' }, 2400);
        }



    })

    $('.send').click(function() {
        $(this).html('&#10003;');

    })



});