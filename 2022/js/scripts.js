//Load navbar and footer
$(function(){
  $("#navPout").load("../html/navbar.html");
  $("#navPoutLive").load("../html/navbar-live.html");
  $("#navPoutLive2").load("../html/navbar-live-loggedin.html");
  $("#footPout").load("../html/footer.html");
  $("#allModals").load("../html/modals.html");
});

window.onload = function() {
    document.getElementById('navburger').className = 'sticky-top';
};

// Animate onto screen
AOS.init();

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

// flex select
$("select.flexselect").flexselect();

//results none
$('#customCheck9').change(function() {
    $("#resultsNone").toggleClass("d-block");
    $("#resultsGrid").toggleClass("d-none");
});

// lightbox plugin
lightGallery(document.getElementById('lightgallery'));

// Vote 2 step
$(function () {
    $(".btn-rate").click(function () {
        $('#modalVote1').modal('hide');
    });
});

// toggle vote button look
$('#voteNow').click(function () {
    if ($(this).hasClass("btn-outline-danger")) {
        $('#modalUnvoted').modal('show');
        $(this).removeClass('btn-outline-danger').addClass('btn-warning').text("⭐️ Rate burger");
    } else {
        $('#modalVote1').modal('show');
        $(this).removeClass('btn-warning').addClass('btn-outline-danger').text("❌ Remove rating");
    }
});

// toggle fave button
$('.btn-fave').click(function () {
    if ($(this).hasClass("text-danger")) {
        $(this).removeClass('text-danger').addClass('text-dark');
        ($(this).children()).removeClass('fas').addClass('far');
        $('#elementRemoved').toast('show');
        
    } else {
        $(this).removeClass('text-dark').addClass('text-danger');
        ($(this).children()).removeClass('far').addClass('fas');
        $('#elementSaved').toast('show');
    }
});

// toggle fave button on account page
$('.btn-fave-account').click(function () {
    $(this).removeClass('text-danger').addClass('text-light');
    ($(this).children()).removeClass('fas').addClass('fal');
    $('#elementRemoved').toast('show');
    $(this).parent().hide();
    $(this).hide();
});

// toggle fave button on resto page
$('.btn-fave-page').click(function () {
    if ($(this).hasClass("btn-outline-danger")) {
        $(this).removeClass('btn-outline-danger').addClass('btn-outline-dark').text("❤️ Save for later");
        $('#elementRemoved').toast('show');
        
    } else {
        $(this).removeClass('btn-outline-dark').addClass('btn-outline-danger').text("❌  Remove from Saved");
        $('#elementSaved').toast('show');
    }
});

// tooltip above save button on grid
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})