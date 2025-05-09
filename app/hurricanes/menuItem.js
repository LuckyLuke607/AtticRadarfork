const ut = require('../radar/utils');
const createMenuOption = require('../radar/menu/createMenuOption');
const fetchData = require('./fetchData');
var map = require('../radar/map/map');

createMenuOption({
    'divId': 'hurricanesMenuItemDiv',
    'iconId': 'hurricanesMenuItemIcon',

    'divClass': 'mapFooterMenuItem',
    'iconClass': 'icon-grey',

    'contents': 'Hurricane Tracker',
    'icon': 'fa fa-hurricane',
    'css': ''
}, function(divElem, iconElem) {
    var layerArray = $('#dataDiv').data('hurricaneMapLayers');
    if (!$(iconElem).hasClass('icon-blue')) {
        $(iconElem).removeClass('icon-grey');
        $(iconElem).addClass('icon-blue');

        if (map.getLayer(layerArray[0])) {
            for (var i = 0; i < layerArray.length; i++) {
                map.setLayoutProperty(layerArray[i], 'visibility', 'visible');
            }
        } else {
            fetchData();
        }
    } else if ($(iconElem).hasClass('icon-blue')) {
        $(iconElem).removeClass('icon-blue');
        $(iconElem).addClass('icon-grey');

        for (var i = 0; i < layerArray.length; i++) {
            map.setLayoutProperty(layerArray[i], 'visibility', 'none');
        }
    }
})