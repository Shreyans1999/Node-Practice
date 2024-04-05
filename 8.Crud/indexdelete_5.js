const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crudfiles');
const filePath = `${dirPath}/apple.txt`;

fs.unlinkSync(`${dirPath}/fruit.txt`);