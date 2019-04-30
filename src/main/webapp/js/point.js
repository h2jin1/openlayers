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
var view = new ol.View({
  center: korea_5186,
  zoom: 10
});

var map = new ol.Map({
  target: 'map'
});

map.addLayer(osm_layer);
map.setView(view);



