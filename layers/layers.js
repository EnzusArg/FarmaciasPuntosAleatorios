var wms_layers = [];


        var lyr_Argenmap_0 = new ol.layer.Tile({
            'title': 'Argenmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_farmaciaspuntosaleatorios_1 = new ol.format.GeoJSON();
var features_farmaciaspuntosaleatorios_1 = format_farmaciaspuntosaleatorios_1.readFeatures(json_farmaciaspuntosaleatorios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_farmaciaspuntosaleatorios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_farmaciaspuntosaleatorios_1.addFeatures(features_farmaciaspuntosaleatorios_1);
var lyr_farmaciaspuntosaleatorios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_farmaciaspuntosaleatorios_1, 
                style: style_farmaciaspuntosaleatorios_1,
                popuplayertitle: 'farmaciaspuntosaleatorios',
                interactive: true,
                title: '<img src="styles/legend/farmaciaspuntosaleatorios_1.png" /> farmaciaspuntosaleatorios'
            });

lyr_Argenmap_0.setVisible(true);lyr_farmaciaspuntosaleatorios_1.setVisible(true);
var layersList = [lyr_Argenmap_0,lyr_farmaciaspuntosaleatorios_1];
lyr_farmaciaspuntosaleatorios_1.set('fieldAliases', {'id': 'id', });
lyr_farmaciaspuntosaleatorios_1.set('fieldImages', {'id': '', });
lyr_farmaciaspuntosaleatorios_1.set('fieldLabels', {'id': 'no label', });
lyr_farmaciaspuntosaleatorios_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});