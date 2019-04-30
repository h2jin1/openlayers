/**
 * openlayers 점으로 만든 예제
 * 
	 * 1. layer 정의
     * 2. projection 정의
     * 3. view 정의
     * 4. map 정의
 */


var osm_layer = new ol.layer.Tile({
	source: new ol.source.OSM()
});

var korea_5186 = ol.proj.transform([126.977234, 37.490115], 'EPSG:4326', 'EPSG:3857')

var interaction = new ol.interaction.DragRotateAndZoom();
var control = new ol.control.FullScreen();
var center = ol.proj.transform([126.977234, 37.490115], 'EPSG:4326', 'EPSG:3857');

var view = new ol.View({
	center: center,
	zoom: 10
});

var map = new ol.Map({
	target: 'map',
	layers: [osm_layer],
	view: view
});

var overlay_pin = new ol.Overlay ({
    position: 'bottom-center',
	element: document.getElementById('overlay_pin')
});

//var overlay_coord = new ol.Overlay ({
//    position: 'bottom-center',
//	element: document.getElementById('overlay_coord')
//});

map.on('click', function(event) {
	var coord = event.coordinate;
    var degrees = ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326');
    var hdms = ol.coordinate.toStringHDMS(degrees);
    var element = overlay_pin.getElement();
    element.innerHTML = hdms;
    overlay_pin.setPosition(coord);
	map.addOverlay(overlay_pin);
});

map.on('pointermove', function(event) {
	var coord = event.coordinate;
    var degrees = ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326');
    var hdms = ol.coordinate.toStringHDMS(degrees);
    var element = document.getElementById('overlay_coord');
    element.innerHTML = hdms;
//    overlay_coord.setPosition(coord);
//	map.addOverlay(overlay_coord);
});

