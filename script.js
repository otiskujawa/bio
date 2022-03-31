$(window).load(function() {
    $(".dscbut").click(function() {
        $('.window').show();
    });
    $('.window').click(function() {
        $('.window').hide();
    });
    $('.exitbut').click(function() {
        $('.window').hide();
    });
});