/**
 * openlayers 폴리곤 예제
 * 
	 * 1. layer 정의
     * 2. projection 정의
     * 3. view 정의
     * 4. map 정의
 */


var osm_layer = new ol.layer.Tile({
	source: new ol.source.OSM()
});

/**
 * 벡터 레이어
 * Polygon
 */
var wkt = "POLYGON((123.894914568507 40.0542086331457,124.154199640449 40.0542086331457,124.154199640449 39.9055485612032,123.894914568507 39.9055485612032,123.894914568507 40.0542086331457))";

var format = new ol.format.WKT();
var feature = format.readFeature(wkt, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});

var vector_layer = new ol.layer.Vector({
    zIndex : 40,
    style: style,
    source: new ol.source.Vector({
        features: [feature]
    })
});


var interaction = new ol.interaction.DragRotateAndZoom();
var control = new ol.control.FullScreen();
var center = ol.proj.transform([126.977234, 37.490115], 'EPSG:4326', 'EPSG:3857');

var view = new ol.View({
	center: center,
	zoom: 10
});

var map = new ol.Map({
	target: 'map_polygon',
	layers: [osm_layer, vector_layer],
	view: view
});


/**
 * 레이어 스타일
 * 
 */
var style = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'blue',
        width: 3
    }),
    fill: new ol.style.Fill({
        color: 'rgba(0,0,255,0.6)'
    })
});


map.getView().setCenter(ol.proj.transform([123.89491456850685, 40.05420863314574], 'EPSG:4326', 'EPSG:3857'));