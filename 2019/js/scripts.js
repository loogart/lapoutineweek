$(document).ready(function () {
    // index.html google autocomplete query simulation
    $('.flexdatalist').flexdatalist({
        minLength: 1
    });

    // index.html location javascript popup simulation
    $("#target").click(function () {
        if (confirm("La Poutine Week would like to use your location.")) {
            $('input.flexdatalist').val('69 rue de la Poutine, Montreal QC, H4N 1B2');
            setTimeout(function () {
                window.location.href = "results.html";
            }, 750);
        } else {
            $('input.flexdatalist').val('');
        }
    });
    $("#searchResults").click(function () {
        window.location.href = "results.html";
    });
    $('select').on('change', function (e) {
        setTimeout(function () {
            window.location.href = "results.html";
        }, 500);
    });
    $("#target-2").click(function () {
        if (confirm("La Poutine Week would like to use your location.")) {
            $('input.flexdatalist').val('69 rue de la Poutine, Montreal QC, H4N 1B2');
        } else {
            $('input.flexdatalist').val('');
        }
    });

    // Parallax effect
    var rellax = new Rellax('.rellax');

    // mobile menu
    $("#openMenu").click(function () {
        $(".menu").toggleClass("d-none menu-open");
    });
    $("#closeMenu").click(function () {
        $(".menu").toggleClass("d-none menu-open");
    });
    $(window).on('resize', function () {
        var win = $(this); //this = window
        if (win.width() > 768) {
            $(".menu").removeClass("menu-open").addClass("d-none");
        }
    });

    // input
    $("input").focus(function () {
      $(".map-view").toggleClass("map-view d-none");
    });


});
