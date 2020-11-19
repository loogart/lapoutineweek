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

// validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();