const fs = require('fs');
const stat = fs.statSync;
const AdmZip = require('adm-zip');
const path = require('path');



/**
 * @param {String} zipFileName
 * @param {Array<String>} pathNames
 */
function newArchive(zipFileName, pathNames) {

    const zip = new AdmZip();
    const pathToZip = path.join(__dirname, `../storage/zip/${zipFileName}`);

    pathNames.forEach(path => {
        const p = stat(path);
        if (p.isFile()) {
            zip.addLocalFile(path);
        } else if (p.isDirectory()) {
            zip.addLocalFolder(path, path);
        }
    });
    zip.writeZip(pathToZip);
  

}

module.exports = newArchive;