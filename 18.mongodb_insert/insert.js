const dbConnect = require('./mongodb');

const insertData = async () => {
    let data = await dbConnect();
    let result = await data.insertMany([
        { name: 'max 5', brand: 'Micromax', price: 420 },
        { name: 'max 6', brand: 'Moto', price: 520 }
    ]);
    if (result.acknowledged) {
        console.warn("Data is inserted");
    }
}

insertData();
