const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crudfiles');

fs.writeFileSync(`${dirPath}/apple.txt`,'this is a simple file');
