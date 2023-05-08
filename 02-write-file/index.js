const fs = require('fs');
const path = require('path');
const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const { stdin, stdout } = process;

stdout.write('Введите Ваш текст:\n');
stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit') {
        process.exit();
    } else {
        output.write(data);
    }

    process.on('SIGINT', () => {
        process.exit();
    });
})

process.on('exit', () => {
    console.log('Вы завершили ввод Вашего текста, удачи!');
})