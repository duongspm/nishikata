// Life info Tab
$(function(){
    $('.lifeinfo-nav a[id^="nav-"]').on('click', function() {
        $('[id^="tab-"]').hide();
        $('#tab-' + this.id.slice(4)).show();
        $(this).addClass('active');
        $('.lifeinfo-nav a').not(this).removeClass('active');
    });
}); 