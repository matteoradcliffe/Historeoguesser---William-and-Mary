function initPano() {
    // Note: constructed panorama objects have visible: true
    // set by default.
    const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("map"),
      {
        
        position: { lat: 37.2702364, lng: -76.7144971 },
    
        zoomControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_LEFT,
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
  }
  
  window.initPano = initPano;