ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.866539, -8.224177, 110.975495, -7.523456]);
var wms_layers = [];


        var lyr_BPNPETADASAR_0 = new ol.layer.Tile({
            'title': 'BPN - PETA DASAR',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://petadasar.atrbpn.go.id/main/wms/{x}/{y}/{z}'
            })
        });

        var lyr_GOOLGESATELITE_1 = new ol.layer.Tile({
            'title': 'GOOLGE SATELITE',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GOOLGEHYBRID_2 = new ol.layer.Tile({
            'title': 'GOOLGE HYBRID',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GOOGLEMAP_3 = new ol.layer.Tile({
            'title': 'GOOGLE MAP',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GOOLGEROAD_4 = new ol.layer.Tile({
            'title': 'GOOLGE ROAD',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_ADM_DESA_DIY_BIG_2023_5 = new ol.format.GeoJSON();
var features_ADM_DESA_DIY_BIG_2023_5 = format_ADM_DESA_DIY_BIG_2023_5.readFeatures(json_ADM_DESA_DIY_BIG_2023_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADM_DESA_DIY_BIG_2023_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_DESA_DIY_BIG_2023_5.addFeatures(features_ADM_DESA_DIY_BIG_2023_5);
var lyr_ADM_DESA_DIY_BIG_2023_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADM_DESA_DIY_BIG_2023_5, 
                style: style_ADM_DESA_DIY_BIG_2023_5,
                popuplayertitle: "ADM_DESA_DIY_BIG_2023",
                interactive: true,
                title: '<img src="styles/legend/ADM_DESA_DIY_BIG_2023_5.png" /> ADM_DESA_DIY_BIG_2023'
            });

lyr_BPNPETADASAR_0.setVisible(false);lyr_GOOLGESATELITE_1.setVisible(true);lyr_GOOLGEHYBRID_2.setVisible(false);lyr_GOOGLEMAP_3.setVisible(false);lyr_GOOLGEROAD_4.setVisible(false);lyr_ADM_DESA_DIY_BIG_2023_5.setVisible(true);
var layersList = [lyr_BPNPETADASAR_0,lyr_GOOLGESATELITE_1,lyr_GOOLGEHYBRID_2,lyr_GOOGLEMAP_3,lyr_GOOLGEROAD_4,lyr_ADM_DESA_DIY_BIG_2023_5];
lyr_ADM_DESA_DIY_BIG_2023_5.set('fieldAliases', {'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', });
lyr_ADM_DESA_DIY_BIG_2023_5.set('fieldImages', {'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', });
lyr_ADM_DESA_DIY_BIG_2023_5.set('fieldLabels', {'Desa': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', });
lyr_ADM_DESA_DIY_BIG_2023_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});