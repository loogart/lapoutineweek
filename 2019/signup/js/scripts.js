//parallax jumbotron design     
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

//location javascript popup
function myFunction() {
    var txt;
    if (confirm("Le Burger Week would like to know your location.")) {
        txt = "Allow";
    } else {
        txt = "Block";
    }
    document.getElementById("demo").innerHTML = txt;
}

//google maps
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: new google.maps.LatLng(45.5035, -73.5685),
        //map customization styles
        styles: [
            {
                elementType: 'geometry',
                stylers: [{
                    color: '#242f3e'
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#242f3e'
                }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#263c3f'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6b9a76'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#38414e'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#212a37'
                }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9ca5b3'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#1f2835'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#f3d19c'
                }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#2f3948'
                }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#17263c'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#515c6d'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#17263c'
                }]
            }
          ]
    });
    // custom Le Burger Week icon for Maps
    var image = './img/burger-marker.png';

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
        '<div id="content" class="map-popup d-flex align-items-center">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<img class="" src="./img/mtl/burger-1.jpg">' +
        '<div class="d-flex flex-column p-4">' +
        '<p class="map-location"><i class="fas fa-map-marker-alt"></i> 0.2 km away</p>' +
        '<h3 class="pink">Restaurant Name</h3>' +
        '<p>The Burger Name, is the best thing you will ever taste.</p>' +
        '<p><strong>$14.95</strong></p>' +
        '<p><a class="orange font-weight-bold" href="./burger.html"><i class="fas fa-arrow-right"></i> View Burger</a></p> ' +
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
        '<div id="content" class="map-popup d-flex align-items-center">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<img class="" src="./img/mtl/burger-2.jpg">' +
        '<div class="d-flex flex-column p-4">' +
        '<p class="map-location"><i class="fas fa-map-marker-alt"></i> 1.1 km away</p>' +
        '<h3 class="pink">Restaurant 2</h3>' +
        '<p><b>And anotha one</b>, bro.</p>' +
        '<p><strong>$14.95</strong></p>' +
        '<p><a class="orange font-weight-bold" href="./burger.html"><i class="fas fa-arrow-right"></i> View Burger</a></p> ' +
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
        '<div id="content" class="map-popup d-flex align-items-center">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<img class="" src="./img/mtl/burger-3.jpg">' +
        '<div class="d-flex flex-column p-4">' +
        '<p class="map-location"><i class="fas fa-map-marker-alt"></i> 0.5 km away</p>' +
        '<h3 class="pink">Restaurant 3</h3>' +
        '<p>Allen Iversion\'s third burgah!</p>' +
        '<p><strong>$14.95</strong></p>' +
        '<p><a class="orange font-weight-bold" href="./burger.html"><i class="fas fa-arrow-right"></i> View Burger</a></p> ' +
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
        '<div id="content" class="map-popup d-flex align-items-center">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<img class="" src="./img/mtl/burger-4.jpg">' +
        '<div class="d-flex flex-column p-4">' +
        '<p class="map-location"><i class="fas fa-map-marker-alt"></i> 0.4 km away</p>' +
        '<h3 class="pink">Restaurant 4</h3>' +
        '<p>Number Four for more!</p>' +
        '<p><strong>$14.95</strong></p>' +
        '<p><a class="orange font-weight-bold" href="./burger.html"><i class="fas fa-arrow-right"></i> View Burger</a></p> ' +
        '</div>';

    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
    });
    burgerMarker4.addListener('click', function () {
        infowindow4.open(map, burgerMarker4);
    });

}
