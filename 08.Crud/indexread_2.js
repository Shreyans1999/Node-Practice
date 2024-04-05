const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crudfiles');
const filePath = `${dirPath}/apple.txt`;

fs.readFile(filePath,'utf8',(err,item)=>{
console.log(item);
})
