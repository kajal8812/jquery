$(document).ready(function(){
    console.log('document ready');

    $('#btn1').click(function(){
        $('#container').fadeOut();
    });
    $('#btn2').click(function(){
        $('#container').fadeIn();
    });
    $('#btn3').click(function(){
        $('#container').fadeToggle();
    });
    $('#btn4').click(function(){
        $('#container').fadeTo(2500,0.5);
    });
    $('#btn5').click(function(){
        $('#container').slideUp();
    });
    $('#btn6').click(function(){
        $('#container').animate({
            width:'200px',height:'300px'
        },500);
    });
});