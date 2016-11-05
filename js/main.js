$(document).ready(function() {
    var $window = $(window);
    
    function checkWidth() {
        var windowSize = $window.outerWidth();

        var smallWindow = windowSize <= 392;
        $('#navigation-buttons li').toggleClass('col-12', smallWindow);
        if (smallWindow) {
            $('#navigation-buttons li:eq(0)').html('<a href="#about">About</a>'); 
            $('#navigation-buttons li:eq(1)').html('<a href="#work">Work</a>'); 
            $('#navigation-buttons li:eq(2)').html('<a href="#fun">Fun</a>'); 
            $('#navigation-buttons li:eq(3)').html('<a  href="#contact">Contact</a>'); 

        }
        else {
           $('#navigation-buttons li:eq(0)').html('<a  href="#contact">Contact</a>'); 
            $('#navigation-buttons li:eq(1)').html('<a href="#fun">Fun</a>'); 
            $('#navigation-buttons li:eq(2)').html('<a href="#work">Work</a>'); 
            $('#navigation-buttons li:eq(3)').html('<a href="#about">About</a>'); 
 
        }
    }
    checkWidth();
    $(window).resize(checkWidth);

});