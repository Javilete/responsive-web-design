$(function(){
    $(document).ready(function(){
        $('#linkHide').click(function(){
            $('#promo').fadeOut('slow');
        });
        
        $('#promo p a').click(function(e){
            e.preventDefault();
            $('#promo p').text('Provide the promotion code "W3C_Rules" during your next subscription');
        });
      
      });    
});

