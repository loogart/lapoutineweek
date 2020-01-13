AOS.init();
// load header and footer
$(function () {
    $("#enHeader").load("./html/en_header.html");
    $("#enFooter").load("./html/en_footer.html");
    $("#enHeaderLive").load("../html/en_header_live.html");
    $("#enFooterLive").load("../html/en_footer_live.html");
    $("#frHeader").load("../html/fr_header.html");
    $("#frFooter").load("../html/fr_footer.html");
});

//registration fee

$('select.region').on('change', function () {
    $(".price").html(this.value);
});

$('.switch-1').click(function(){
    $('.mobile-nav-open').toggleClass("d-none d-block");
    $('.switch-2').toggleClass("d-inline-block d-none");
    $('body').toggleClass("scrollable non-scrollable");
});

$('.switch-2').click(function(){
    $('.search-mobile').toggleClass("d-none d-block");
    $("#searchInput").focus();
});

$('.switch-3').click(function(){
    $('.search-desktop').toggleClass("d-none d-block");
    $('.scrim').toggleClass("d-none d-block");
    $('.desktop-nav-items').toggleClass("d-block d-none");
    $("#searchInputDesktop").focus();
});

$('.scrim').click(function(){
    $(this).toggleClass("d-none d-block");
    $('.search-desktop').toggleClass("d-none d-block");
    $('.desktop-nav-items').toggleClass("d-block d-none");
});