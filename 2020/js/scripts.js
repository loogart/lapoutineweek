AOS.init();
// load header and footer
$(function () {
    $("#enHeader").load("./html/en_header.html");
    $("#enFooter").load("./html/en_footer.html");
//    $("#enWinners").load("./html/en_winners.html");

    $("#frHeader").load("../html/fr_header.html");
    $("#frFooter").load("../html/fr_footer.html");
});

//registration fee

$('select.region').on('change', function () {
    $(".price").html(this.value);
});
