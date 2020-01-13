AOS.init();
// load header and footer
$(function () {
    $("#enHeader").load("./html/en_header.html");
    $("#enFooter").load("./html/en_footer.html");
    $("#enHeaderLive").load("../html/en_header_live.html");
    $("#enFooterLive").load("../html/en_footer_live.html");
    //    $("#enWinners").load("./html/en_winners.html");
    $("#frHeader").load("../html/fr_header.html");
    $("#frFooter").load("../html/fr_footer.html");
});

//registration fee

$('select.region').on('change', function () {
    $(".price").html(this.value);
});

$('.switch-1').click(function(){
    $('.mobile-nav-open').toggleClass("d-none d-block");
    $('body').toggleClass("scrollable non-scrollable");
});

$('.switch-2').click(function(){
    $('.search-mobile').toggleClass("d-none d-block");
    $("#searchInput").focus();
});
$('.switch-3').click(function(){
    $('.search-desktop').toggleClass("d-none d-block");
    $("#searchInput2").focus();
});
