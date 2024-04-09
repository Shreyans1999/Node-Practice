const dbConnect = require('./mongodb');

const update = async ()=>{
    const data = await dbConnect();
    const result = await data.update(
        {name:"shreyans"},
        {$set:{name:"iphone 15"}
    });  
    if (result.acknowledged) {
        console.warn("Data is updated");
    }  
}

update();