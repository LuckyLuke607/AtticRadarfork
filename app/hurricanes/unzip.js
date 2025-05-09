const drawHurricanesToMap = require('./drawToMap');

// https://gis.stackexchange.com/a/325061/206737
// https://jsfiddle.net/7z318a0r/
function unzipKMZ(kmzBlob, name, cb) {
    console.log(`${name} - Unzipping KMZ...`);
    let getDom = xml => (new DOMParser()).parseFromString(xml, "text/xml")
    let getExtension = fileName => fileName.split(".").pop()

    let getKmlDom = (kmzFile) => {
        var zip = new JSZip()
        return zip.loadAsync(kmzFile)
            .then(zip => {
                let kmlDom = null
                zip.forEach((relPath, file) => {
                    if (getExtension(relPath) === "kml" && kmlDom === null) {
                        kmlDom = file.async("string").then(getDom)
                    }
                })
                return kmlDom || Promise.reject("No kml file found")
            });
    }

    getKmlDom(kmzBlob).then(kmlDom => {
        let geoJsonObject = toGeoJSON.kml(kmlDom)
        //console.log(`${hurricaneID} - KMZ successfully unzipped.`);
        //drawHurricanesToMap(geoJsonObject, type, index, hurricaneID);
        cb(geoJsonObject);
    })
}

module.exports = unzipKMZ;