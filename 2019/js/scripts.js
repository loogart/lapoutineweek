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
    
    // vote button
    $("#voteButton").click(function(){
        $(this).text(function(i, v){
		   return v === 'Thank you for your vote.' ? 'Vote for this Restaurant' : 'Thank you for your vote.'
		});
        $(".btn-vote").toggleClass("btn-secondary btn-success")
    });

});

// Parallax effect
var rellax = new Rellax('.rellax');

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
        url: "./img/poutine-marker.svg", // url
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
        '<div id="content" class="crd map-popup d-flex align-items-center">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<a class="font-weight-bold" href="./product.html">' +
        '<div class="crd-body">' +
        '<img class="pb-2" src="./img/photos/poutine-4.jpeg">' +
        '<h3>Restaurant Name</h3>' +
        '<h4>The Poutine Name</h4>' +
        '<div class="crd-row">' +
        '<p>$18 - Vegan, Beets, gourmet</p>' +
        '<p>1.6 km</p>' +
        '</div>' +
        '</div>' +
        '</a>' +
        '</div>';

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });
    burgerMarker1.addListener('click', function () {
        infowindow1.open(map, burgerMarker1);
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
        '<div id="content" class="crd map-popup d-flex align-items-center">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<a class="font-weight-bold" href="./product.html">' +
        '<div class="crd-body">' +
        '<img class="pb-2" src="./img/photos/poutine-5.jpeg">' +
        '<h3>Restaurant Name</h3>' +
        '<h4>The Poutine Name</h4>' +
        '<div class="crd-row">' +
        '<p>$18 - Vegan, Beets, gourmet</p>' +
        '<p>1.6 km</p>' +
        '</div>' +
        '</div>' +
        '</a>' +
        '</div>';

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });
    burgerMarker2.addListener('click', function () {
        infowindow2.open(map, burgerMarker2);
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
        '<div id="content" class="crd map-popup d-flex align-items-center">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<a class="font-weight-bold" href="./product.html">' +
        '<div class="crd-body">' +
        '<img class="pb-2" src="./img/photos/poutine-7.jpeg">' +
        '<h3>Restaurant Name</h3>' +
        '<h4>The Poutine Name</h4>' +
        '<div class="crd-row">' +
        '<p>$14 - Vegan, Beets, gourmet</p>' +
        '<p>1.6 km</p>' +
        '</div>' +
        '</div>' +
        '</a>' +
        '</div>';

    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
    });
    burgerMarker3.addListener('click', function () {
        infowindow3.open(map, burgerMarker3);
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
        '<div id="content" class="crd map-popup d-flex align-items-center">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<a class="font-weight-bold" href="./product.html">' +
        '<div class="crd-body">' +
        '<img class="pb-2" src="./img/photos/poutine-9.jpg">' +
        '<h3>Restaurant Name</h3>' +
        '<h4>The Poutine Name</h4>' +
        '<div class="crd-row">' +
        '<p>$14 - Vegan, Beets, gourmet</p>' +
        '<p>1.6 km</p>' +
        '</div>' +
        '</div>' +
        '</a>' +
        '</div>';

    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
    });
    burgerMarker4.addListener('click', function () {
        infowindow4.open(map, burgerMarker4);
    });

}
