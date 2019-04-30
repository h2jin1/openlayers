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

var overlay = new ol.Overlay ({
	position: center,
	element: document.getElementById('overlay')
});

var view = new ol.View({
	center: center,
	zoom: 10
});

var map = new ol.Map({
  target: 'map',
  layers: [osm_layer],
  interactions: [interaction],
  controls: [control],
  overlays: [overlay],
  view: view
});



