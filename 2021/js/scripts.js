// Animate onto screen
AOS.init();

// scroll to add navbar bottom border
$(window).scroll(function(){
    if ($(this).scrollTop() > 69) {
       $('.navbar-light').addClass('navbar-border-bottom');
    } else {
       $('.navbar-light').removeClass('navbar-border-bottom');
    }
});