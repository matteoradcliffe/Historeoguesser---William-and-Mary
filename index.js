let guess_location
let random_location


async function initialize() {
    
    const pois = [
         {lat: 37.2702364, lng: -76.7144971}, //ISC
          {lat: 37.2712101, lng: -76.7195004}, //Pleasants
          {lat: 37.272925, lng: -76.7143516}, //Zable
          {lat: 37.2718334, lng: -76.7134909}, //Sadler
          {lat: 37.2708312, lng: -76.7073767} //DoG
    ]

    const random_location = pois[Math.floor((Math.random() * (pois.length)))]

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    
    const myLatLng = { lat: 37.2706829, lng: -76.7159741 };
    const map = new Map(document.getElementById("minimap"), {
        center: myLatLng,
        zoom: 16,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        mapId: "4504f8b37365c3d0",
    });

    let marker = new AdvancedMarkerElement({
        map,
        position: { lat: 37.2706829, lng: -76.7159741 },
    });
    
    const panorama = new google.maps.StreetViewPanorama(
        document.getElementById("map"),
          {
            
            position: random_location,
        
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT,
              },
            linksControl: false,
            panControl: true,
            enableCloseButton: false,
            fullscreenControl: false,
            addressControl: false,
            showRoadLabels: false,
            clickToGo: false
            
          },
    );

    map.addListener("click", (mapsMouseEvent) => {
        marker.setMap(null)
        guess_location = mapsMouseEvent.latLng
        marker = new AdvancedMarkerElement({
            map,
            position: mapsMouseEvent.latLng
            
        });
        
    });
    

}

function calculate_distance() {
    var randomLat = random_location.lat
    var randomLng = random_location.lng
    var guessLat = guess_location.lat()
    var guessLng = guess_location.lng()

    var metersLat = Math.abs(randomLat - guessLat) * 111.111
    var metersLng = Math.abs(randomLng - guessLng) * 111.111

    return Math.sqrt(Math.pow(metersLat, 2) + Math.pow(metersLng, 2))
    
}

initialize();


