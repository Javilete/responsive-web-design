$(function(){
    $('#main div#promo').append('<a id="linkHide" href="#">Hide Promotion</a>');
    
    $('#linkHide').click(function(){
        $('#promo').fadeOut('slow');
    });

    $('#promo p a').click(function(e){
        e.preventDefault();
        $('#promo p').text('Provide the promotion code "W3C_Rules" during your next subscription');
    });

});

