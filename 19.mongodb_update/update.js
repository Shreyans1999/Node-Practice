const dbConnect = require('./mongodb');

const update = async () => {
    const data = await dbConnect();
    const result = await data.updateMany(
        { name: "iphone 15" },
        { $set: { name: "iphone 20" } }
    );
    if (result.acknowledged) {
        console.warn("Data is updated");
    }
}

update();
