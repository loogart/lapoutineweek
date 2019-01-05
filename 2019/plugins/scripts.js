$(document).ready(function () {
    // index.html google autocomplete query simulation
    $('.flexdatalist').flexdatalist({
        minLength: 1
    });

    // index.html location javascript popup simulation
    $("#target").click(function () {
        if (confirm("La Poutine Week would like to use your location.")) {
            $('input.flexdatalist').val('69 rue de la Poutine, Montreal QC, H4N 1B2').delay(1200);
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

    // Parallax effect
    var rellax = new Rellax('.rellax');

    // open mobile menu
    $("#openMenu").click(function () {
        $(".menu").toggleClass("d-none menu-open");
    });
    $("#closeMenu").click(function () {
        $(".menu").toggleClass("d-none menu-open");
    });


});
