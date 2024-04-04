const fs = require('fs');
const input = process.argv;

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}
else
{
    console.log("invalid input ")
}

//command for add - node index.js "add" "red.txt" 'this is color'
//command for remove - node index.js "remove" "red.txt" 'this is color' 