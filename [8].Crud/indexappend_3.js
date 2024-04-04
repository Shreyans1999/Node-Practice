const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crudfiles');
const filePath = `${dirPath}/apple.txt`;

fs.appendFile(filePath,' for fruits',(err)=>{
if(!err) console.log("file is updated")
})