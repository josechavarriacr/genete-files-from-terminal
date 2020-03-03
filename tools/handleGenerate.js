const generate = require('../tools/generateFile');

function setModel(fileName) {
    console.log('generating route');
    const pathTemplate = './templates/model.js';
    const fileLowerCase  = fileName.toLowerCase();
    const fileNamePath = `./test/${fileLowerCase}.js`;    
    const newFile = new generate(pathTemplate, fileNamePath);
    const content = newFile.getFile();
    const result = content.replace(/model/g, fileName);
    newFile.writeFile(result);
}

function setController(fileName) {
    console.log('generating controller');
    const pathTemplate = './templates/controller.js';
    const fileLowerCase  = fileName.toLowerCase();
    const fileNamePath = `./test/${fileLowerCase}.controller.js`;
    const newFile = new generate(pathTemplate, fileNamePath);
    const content = newFile.getFile();
    const result = content.replace(/model/g, fileName);
    newFile.writeFile(result);
}

function setRoute(fileName) {
    console.log('generating route');
    const pathTemplate = './templates/route.js';
    const fileLowerCase  = fileName.toLowerCase();
    const fileNamePath = `./test/${fileLowerCase}.route.js`;    
    const newFile = new generate(pathTemplate, fileNamePath);
    const content = newFile.getFile();
    const result = content.replace(/model/g, fileLowerCase);
    newFile.writeFile(result);
}

function setTodos(fileName) {
    setModel(fileName);
    setController(fileName);
    setRoute(fileName);
}

module.exports = {
    setModel,
    setController,
    setRoute,
    setTodos
}

