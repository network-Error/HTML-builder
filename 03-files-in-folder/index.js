const fs = require('fs');
const path = require('path');
const pathToFolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathToFolder, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        fs.stat(path.join(pathToFolder, file), (err, stats) => {
            if (err) throw err;
            if (stats.isFile()) {
                console.log(file.split('.')[0] + ' - ' + file.split('.')[1] + ' - ' + (stats.size / 2000).toFixed(3) + 'kb');
            };
        });
    });
});