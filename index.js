

async function initialize() {
     // Request needed libraries.
    const pois = [
         {lat: 37.2702364, lng: -76.7144971}, //ISC
          {lat: 37.2712101, lng: -76.7195004}, //Pleasants
          {lat: 37.272925, lng: -76.7143516}, //Zable
          {lat: 37.2718334, lng: -76.7134909}, //Sadler
          {lat: 37.2708312, lng: -76.7073767} //DoG
    ]

    const guess_location = pois[Math.floor((Math.random() * (pois.length)))]

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
    const marker = new AdvancedMarkerElement({
        map,
        position: { lat: 37.2706829, lng: -76.7159741 },
    });
    
    const panorama = new google.maps.StreetViewPanorama(
        document.getElementById("map"),
          {
            
            position: guess_location,
        
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
        marker = new AdvancedMarkerElement({
            map,
            position: mapsMouseEvent.latLng
        });
    
    });
    console.log(guess_location)
  }
  
initialize();