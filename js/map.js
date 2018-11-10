function initMap() {
    var myLatLng = {lat: 49.0914438, lng: 33.4126071};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
    });

    var icon = "http://pickleballplaces.com/wp-content/uploads/2013/05/onlinestorepin.png";
    var marker = new google.maps.Marker({
        position: {
            lat: myLatLng.lat - 0.005,
            lng: myLatLng.lng - 0.01,
        },
        map: map,
        icon: icon
    });
}