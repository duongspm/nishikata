$(function() {
    $('ul.delay-show li')
        .css({
            left : '20px',
            opacity: 0
        })
        .each(function(i){
            $(this).delay(100 * i)
                .animate({
                    left : '0',
                    opacity: 1
                }, 500);
        });
});

