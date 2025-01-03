// Google Maps initialization
function initMap() {
    // WWE Headquarters coordinates
    const wweHQ = { lat: 41.0838, lng: -73.5452 };

    // Map options
    const mapOptions = {
        zoom: 15,
        center: wweHQ,
        mapId: 'YOUR_MAP_ID', // Replace with your actual map ID
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{ "color": "#242f3e" }]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    { "lightness": -80 }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "color": "#746855" }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "color": "#d59563" }
                ]
            }
        ]
    };

    // Create map
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Custom marker icon
    const markerIcon = {
        url: 'assets/img/Cards img/wwe-logo.png', // Replace with your WWE logo
        scaledSize: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 40)
    };

    // Add marker
    const marker = new google.maps.Marker({
        position: wweHQ,
        map: map,
        icon: markerIcon,
        title: 'WWE Headquarters',
        animation: google.maps.Animation.DROP
    });

    // Info window content
    const contentString = `
        <div style="padding: 10px;">
            <h3 style="margin-bottom: 5px;">WWE Headquarters</h3>
            <p style="margin: 0;">1241 East Main Street<br>
            Stamford, CT 06902</p>
        </div>
    `;

    // Create info window
    const infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    // Add click listener to marker
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });

    // Add hover effect to marker
    marker.addListener('mouseover', () => {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    });

    marker.addListener('mouseout', () => {
        marker.setAnimation(null);
    });
}

// Handle map errors
function handleMapError() {
    const mapContainer = document.getElementById('map');
    mapContainer.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <p>Sorry, the map could not be loaded at this time.</p>
            <p>Please try again later.</p>
        </div>
    `;
}        