const pois = [
    {lat: 37.2702364, lng: -76.7144971}, //ISC
    {lat: 37.2712101, lng: -76.7195004}, //Pleasants
    {lat: 37.272925, lng: -76.7143516}, //Zable
    {lat: 37.2718334, lng: -76.7134909}, //Sadler
    {lat: 37.2708312, lng: -76.7073767} //DoG
]

let guess_location;
let random_location = pois[Math.floor((Math.random() * (pois.length)))];

let markers = [];


const { Map } = await google.maps.importLibrary("maps");
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

const myLatLng = { lat: 37.2706829, lng: -76.7159741 };
const map = new Map(document.getElementById("minimap"), {
    center: myLatLng,
    zoom: 16,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    zoomControl: false,
    mapId: "4504f8b37365c3d0",
});

let marker = new AdvancedMarkerElement({
    map,
    position: { lat: 37.2706829, lng: -76.7159741 },
});
markers.push(marker); 

let rndmarker = new AdvancedMarkerElement({
    map: null,
    position: random_location,
});
markers.push(rndmarker); 

function initialize() {
    clear_markers()
    
    let panorama = new google.maps.StreetViewPanorama(
        document.getElementById("map"),
          {  
            position: random_location,
            linksControl: false,
            panControl: true,
            enableCloseButton: false,
            fullscreenControl: false,
            addressControl: false,
            showRoadLabels: false,
            clickToGo: false,
            zoomControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT,
            }
            
          },
    );

    let rndmarker = new AdvancedMarkerElement({
        map: null,
        position: random_location,
    });
    
    

    map.addListener("click", (mapsMouseEvent) => {
        marker.setMap(null)
        guess_location = mapsMouseEvent.latLng
        marker = new AdvancedMarkerElement({
            map,
            position: mapsMouseEvent.latLng
            
        });   
        
        reveal_location();
        markers.push(marker);
        console.log(markers);
        console.log(calculate_distance());
    });

}

function calculate_distance() {
    var randomLat = random_location.lat
    var randomLng = random_location.lng
    var guessLat = guess_location.lat()
    var guessLng = guess_location.lng()

    var dLat = 111.32 * Math.abs(randomLat-guessLat)
    var dLng = (40075 * Math.cos(randomLat-guessLat) / 360) * (randomLng-guessLng)
    return 1000*(Math.sqrt(Math.pow(dLat,2) + Math.pow(dLng,2)))

}


function randomize_location() {    
    random_location = pois[Math.floor((Math.random() * (pois.length)))]
}

function clear_markers() {
    markers.forEach(marker => {
        marker.setMap(null);
    });
    markers = [];
}

function reveal_location() {
    rndmarker.setMap(map);
}

initialize();