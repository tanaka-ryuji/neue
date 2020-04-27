// JavaScript Document

function initMap() {
	var optionsSet = [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#008eff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#0091ff"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "hue": "#0091ff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "gamma": "2.5"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#aabfd2"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e9e9ef"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
];
	//maps-osaka
	var mapPosition = {lat: 34.695224, lng: 135.517119};
	var mapArea = document.getElementById('maps-osaka');
	var mapOptions = {
			center: mapPosition,
			zoom: 16,
			disableDefaultUI: true,
			mapTypeControl: true,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
			},
			streetViewControl: true,
			streetViewControlOptions: {
				position: google.maps.ControlPosition.LEFT_BOTTOM,
			},
			styles: optionsSet,
	};
	var map = new google.maps.Map(mapArea, mapOptions);
	var markerOptions = {
		map: map,
		position: mapPosition,
		icon: '../access/img/pin_01.png',
	};
	var marker = new google.maps.Marker(markerOptions);
	
	
	
	//maps-tokyo
	var mapPosition = {lat: 35.693884, lng: 139.786824};
	var mapArea = document.getElementById('maps-tokyo');
	var mapOptions =  {
			center: mapPosition,
			zoom: 16,
			disableDefaultUI: true,
			mapTypeControl: true,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
			},
			streetViewControl: true,
			streetViewControlOptions: {
				position: google.maps.ControlPosition.LEFT_BOTTOM,
			},
			styles: optionsSet,
	};
	var map = new google.maps.Map(mapArea, mapOptions);
	var markerOptions = {
		map: map,
		position: mapPosition,
		icon: '../access/img/pin_01.png',
	};
	var marker = new google.maps.Marker(markerOptions);	
}