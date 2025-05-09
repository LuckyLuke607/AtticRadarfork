var noaaColors = require('./noaaColors');

// these are custom colors that override noaa's colors
const myPolygonColors = {
    'Tornado Warning': 'rgb(233, 51, 35)',
    'Severe Thunderstorm Warning': 'rgb(244, 185, 65)',
    'Flood Warning': 'rgb(147, 241, 75)',
    'Flash Flood Warning': 'rgb(147, 241, 75)',
    'Special Marine Warning': 'rgb(197, 155, 249)',
    'Special Weather Statement': 'rgb(151, 204, 230)',

    'Tornado Watch': 'rgb(245, 254, 83)',
    'Severe Thunderstorm Watch': 'rgb(238, 135, 134)',
    'Flood Watch': 'rgb(58, 111, 29)',
    'Flash Flood Watch': 'rgb(58, 111, 29)',

    'Hurricane Warning': 'rgb(199, 63, 155)',
    'Tropical Storm Warning': 'rgb(251, 231, 88)',
    'Storm Surge Warning': 'rgb(76, 87, 246)',
    'Hurricane Watch': 'rgb(234, 51, 247)',
    'Tropical Storm Watch': 'rgb(239, 127, 131)',
    'Storm Surge Watch': 'rgb(165, 202, 182)',

    'Blizzard Warning': 'rgb(235, 78, 65)',
    'Winter Storm Warning': 'rgb(240, 141, 233)',
    'Ice Storm Warning': 'rgb(173, 74, 248)',
    'Snow Squall Warning': 'rgb(3, 0, 163)',
    'Winter Weather Advisory': 'rgb(167, 129, 249)',
    'Blizzard Watch': 'rgb(234, 254, 89)',
    'Winter Storm Watch': 'rgb(57, 129, 247)',

    'Small Craft Advisory': 'rgb(109, 186, 150)',
    'Gale Watch': 'rgb(102, 147, 255)',
    'Gale Warning': 'rgb(50, 111, 255)'
}

function getPolygonColors(alertEvent) {
    // var noaaColors = require('./noaaColors');
    // for (var item in noaaColors) {
    //     delete noaaColors[item].FIELD3;
    //     var unformattedRGB = noaaColors[item].rgb2;
    //     var formattedRGB = unformattedRGB.split(' ');
    //     formattedRGB = `rgb(${formattedRGB[0]}, ${formattedRGB[1]}, ${formattedRGB[2]})`
    //     noaaColors[item].rgb = formattedRGB;

    //     noaaColors[item].hex = `#${noaaColors[item].hex2}`;

    //     delete noaaColors[item].rgb2;
    //     delete noaaColors[item].hex2;
    // }
    // console.log(noaaColors)
    // for (var item in noaaColors) {
    //     if (myPolygonColors[item] != undefined) {
    //         noaaColors[item].rgb = myPolygonColors[item];
    //         //noaaColors[item].rgb = myPolygonColors[item];
    //     }
    // }
    // console.log(noaaColors)

    if (Object.keys(noaaColors).includes(alertEvent)) {
        var c = noaaColors[alertEvent].rgb;
        if (Object.keys(noaaColors[alertEvent]).includes('originalColor')) {
            c = noaaColors[alertEvent].rgb;
        }
        return {
            'color': c,
            'priority': noaaColors[alertEvent].priority
        }
    } else {
        return {
            'color': 'rgb(128, 128, 128)',
            'priority': '999'
        }
    }
}

module.exports = getPolygonColors;