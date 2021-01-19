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

// flex select
$("select.flexselect").flexselect();

//google maps
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: new google.maps.LatLng(45.5035, -73.5685),
        //map customization styles
        styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5eedd"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5eedd"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#D3C8B8"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#ff7800"
            },
            {
                "saturation": "-10"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e2d2b9"
            },
            {
                "lightness": 17
            }
        ]
    }
]
    });

    var image = {
        url: "../img/artwork/item-marker.png", // url
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
        '<a href="./restaurant.html" class="grid-item for-map">' +
        '<img src="../img/poutines/public-regions-1579527189458.jpg" class="img-map" alt="...">' +
        '<span class="resto-name">Restaurant Name</span>' +
        '<span class="item-name">Item Name</span>' +
        '<div class="d-flex justify-content-between">' +
        '<span class="price">$14</span>' +
        '<span class="distance">1.2km</span>' +
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
        '<a href="./restaurant.html" class="grid-item for-map">' +
        '<img src="../img/poutines/public-regions-1579617063259.jpg" class="img-map" alt="...">' +
        '<span class="resto-name">Restaurant Name</span>' +
        '<span class="item-name">Item Name</span>' +
        '<div class="d-flex justify-content-between">' +
        '<span class="price">$15</span>' +
        '<span class="distance">1.2km</span>' +
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
        '<a href="./restaurant.html" class="grid-item for-map">' +
        '<img src="../img/poutines/public-regions-1579623306245.jpg" class="img-map" alt="...">' +
        '<span class="resto-name">Restaurant Name</span>' +
        '<span class="item-name">Item Name</span>' +
        '<div class="d-flex justify-content-between">' +
        '<span class="price">$18</span>' +
        '<span class="distance">1.2km</span>' +
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
        '<a href="./restaurant.html" class="grid-item for-map">' +
        '<img src="../img/artwork/placeholder.jpg" class="img-map" alt="...">' +
        '<span class="resto-name">Restaurant Name</span>' +
        '<span class="item-name">Item Name</span>' +
        '<div class="d-flex justify-content-between">' +
        '<span class="price">$18</span>' +
        '<span class="distance">1.2km</span>' +
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

//toggle map view
$(function () {
    $("#customSwitch1").change(function () {
        $("#resultsMap").toggleClass("d-block", this.checked);
        $("#resultsGrid").toggleClass("d-none", this.checked);
    }).change();
});

// modal data mirror for prottotype
$(".grid-item").click(function () {
    var restoName = $(this).find(".resto-name").html();
    var itemName = $(this).find(".item-name").html();
    var itemPrice = $(this).find(".price").html();
    var itemImage = $(this).find("img.img-item").attr("src");
    $(".modal-resto").html(restoName);
    $(".modal-burger").html(itemName);
    $(".modal-price").html(itemPrice);
    $('.modal-photo').attr('src', itemImage);
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
        $(this).removeClass('btn-outline-danger').addClass('btn-primary').text("Rate  this poutine");
    } else {
        $('#modalVote1').modal('show');
        $(this).removeClass('btn-primary').addClass('btn-outline-danger').text("Remove rating");
    }
});