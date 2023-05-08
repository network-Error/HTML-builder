const fs = require('fs');
const path = require('path');
const pathToNewFiles = path.join(__dirname, 'files-copy');
const pathToOldFiles = path.join(__dirname, 'files');

fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: true}, err => {
    if (err) throw err;
});

fs.readdir(pathToOldFiles, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        const pathFrom = path.join(pathToOldFiles, file);
        const pathTo = path.join(pathToNewFiles, file);
        fs.copyFile(pathFrom, pathTo, (err) => {
            if (err) throw err;
        })
    })
    console.log('Копирование файлов завершено!');
})
