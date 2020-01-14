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


//navigation ui
$('.switch-1').click(function () {
    $('.mobile-nav-open').toggleClass("d-none d-block");
    $('.switch-2').toggleClass("d-inline-block d-none");
    $('body').toggleClass("scrollable non-scrollable");
});

$('.switch-2').click(function () {
    $('.search-mobile').toggleClass("d-none d-block");
    $("#searchInput").focus();
});

$('.switch-3').click(function () {
    $('.search-desktop').toggleClass("d-none d-block");
    $('.scrim').toggleClass("d-none d-block");
    $('.desktop-nav-items').toggleClass("d-block d-none");
    $("#searchInputDesktop").focus();
});

$('.switch-4').click(function () {
    $('.filter-box').toggleClass("d-none d-block");
    $('.scrim').toggleClass("d-none d-block");
});


$('.switch-5').click(function () {
    $(this).parent().parent().parent().parent().addClass("d-none");
});

$('.scrim').click(function () {
    $(this).toggleClass("d-none d-block");
    $('.search-desktop').toggleClass("d-none d-block");
    $('.desktop-nav-items').toggleClass("d-block d-none");
    $('.filter-box').toggleClass("d-block d-none");
});


//google maps
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: new google.maps.LatLng(45.5035, -73.5685),
        //map customization styles
        styles: [{
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
                    }, {
                "hue": "#ff0000"
                    }]
                }]
    });
    // custom Le Burger Week icon for Maps
    //    var image = './img/poutine-marker.svg';

    var image = {
        url: "../img/burger-marker.svg", // url
        scaledSize: new google.maps.Size(69, 69), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    // Example of my location
    var marker = new google.maps.Marker({
        position: {
            lat: 45.5035,
            lng: -73.5695
        },
        map: map,
        title: 'My location'
    });

    // First restaurant
    var burgerMarker1 = new google.maps.Marker({
        position: {
            lat: 45.5035,
            lng: -73.5685
        },
        map: map,
        icon: image,
        title: 'Restaurant 1'
    });

    var contentString1 =
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<a href="./product.html">' +
        '<div class="card">' +
        '<img src="../img/photos/poutine-generic.jpg" class="card-img-top" alt="...">' +
        '<div class="card-body">' +
        '<h3>Restaurant Name</h4>' +
        '<h4>Poutine Name</h5>' +
        '<div class="d-flex justify-content-between">' +
        '<p>$18</p>' +
        '<p>1.2km</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</a>' +
        '</div>';

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });
    burgerMarker1.addListener('click', function () {
        infowindow1.open(map, burgerMarker1);
        infowindow2.close(map, burgerMarker2);
        infowindow3.close(map, burgerMarker3);
        infowindow4.close(map, burgerMarker4);
    });

    // Second restaurant
    var burgerMarker2 = new google.maps.Marker({
        position: {
            lat: 45.5045,
            lng: -73.5665
        },
        map: map,
        icon: image,
        title: 'Restaurant 2'
    });
    var contentString2 =
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<a href="./product.html">' +
        '<div class="card">' +
        '<img src="../img/photos/poutine-generic.jpg" class="card-img-top" alt="...">' +
        '<div class="card-body">' +
        '<h3>Restaurant Name</h4>' +
        '<h4>Poutine Name</h5>' +
        '<div class="d-flex justify-content-between">' +
        '<p>$18</p>' +
        '<p>1.2km</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</a>' +
        '</div>';

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });
    burgerMarker2.addListener('click', function () {
        infowindow2.open(map, burgerMarker2);
        infowindow1.close(map, burgerMarker1);
        infowindow3.close(map, burgerMarker3);
        infowindow4.close(map, burgerMarker4);
    });

    // Third restaurant
    var burgerMarker3 = new google.maps.Marker({
        position: {
            lat: 45.5045,
            lng: -73.5689
        },
        map: map,
        icon: image,
        title: 'Restaurant 3'
    });
    var contentString3 =
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<a href="./product.html">' +
        '<div class="card">' +
        '<img src="../img/photos/poutine-generic.jpg" class="card-img-top" alt="...">' +
        '<div class="card-body">' +
        '<h3>Restaurant Name</h4>' +
        '<h4>Poutine Name</h5>' +
        '<div class="d-flex justify-content-between">' +
        '<p>$18</p>' +
        '<p>1.2km</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</a>' +
        '</div>';

    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
    });
    burgerMarker3.addListener('click', function () {
        infowindow3.open(map, burgerMarker3);
        infowindow2.close(map, burgerMarker2);
        infowindow1.close(map, burgerMarker1);
        infowindow4.close(map, burgerMarker4);
    });

    // Fourth restaurant
    var burgerMarker4 = new google.maps.Marker({
        position: {
            lat: 45.5025,
            lng: -73.57
        },
        map: map,
        icon: image,
        title: 'Restaurant 4'
    });
    var contentString4 =
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<a href="./product.html">' +
        '<div class="card">' +
        '<img src="../img/photos/poutine-generic.jpg" class="card-img-top" alt="...">' +
        '<div class="card-body">' +
        '<h3>Restaurant Name</h4>' +
        '<h4>Poutine Name</h5>' +
        '<div class="d-flex justify-content-between">' +
        '<p>$18</p>' +
        '<p>1.2km</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</a>' +
        '</div>';

    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
    });
    burgerMarker4.addListener('click', function () {
        infowindow4.open(map, burgerMarker4);
        infowindow2.close(map, burgerMarker2);
        infowindow3.close(map, burgerMarker3);
        infowindow1.close(map, burgerMarker1);
    });

}
