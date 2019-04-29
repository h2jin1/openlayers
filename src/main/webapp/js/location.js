/**
 * 내 위치 표시
 */
var map = new ol.Map({
		target: 'map',
		layers: [
			new ol.layer.Tile({
			  source: new ol.source.OSM()
			})
		],
		view: new ol.View({
			center: ol.proj.fromLonLat([37.41, 8.82]),
			zoom: 4
		})
	});

var geolocation = new ol.Geolocation({
    trackingOptions: {
        enableHighAccuracy: true
    }
});

geolocation.setTracking(true);

geolocation.on('change', function() {
    console.log('accuracy = ' + geolocation.getAccuracy() + 'm ' +
        'altitude = ' + geolocation.getAltitude() + 'm ' +
        'altitudeAccuracy = ' +  geolocation.getAltitudeAccuracy() + 'm ' +
        'heading = ' + geolocation.getHeading() + 'rad ' +
        'speed = ' + geolocation.getSpeed() + 'm/s');
});
 
geolocation.on('error', function(error) {
    console.log('geolocation error: ' + error.message);
});
 
geolocation.on('change:position', function() {
    var coordinates = geolocation.getPosition();
 
    positionFeature.setGeometry(coordinates ? new ol.geom.Point(coordinates) : null);
});	

var positionFeature = new ol.Feature();

positionFeature.setStyle(new ol.style.Style({
	image: new ol.style.Circle({
		fill: new ol.style.Fill({color: 'yellow'}),
        stroke: new ol.style.Stroke({color: 'black', width:2}),
		radius: 10
    })
}));

//new ol.layer.VectorLayer({
//    map: map,
//    source: new ol.source.Vector.VectorSource({
//        features: [positionFeature]
//    })
//});

