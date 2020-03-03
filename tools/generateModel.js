const todos = require('./handleGenerate');
const args = process.argv.slice(2);
const fileName = args[0];
if(!fileName) return console.error('Missing name');
todos.setModel(fileName);