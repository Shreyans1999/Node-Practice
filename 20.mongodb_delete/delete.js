const dbConnect = require('./mongodb');

const update = async () => {
    const data = await dbConnect();
    const result = await data.deleteOne({name:"max 5"}
    );
    if (result.acknowledged) {
        console.warn("Data is deleted");
    }
}

update();
