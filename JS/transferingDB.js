const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/superEasy";
const sourceDbName = "superEasy";
const targetDbName = "superEasyHEB";

(async () => {
  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const sourceDb = client.db(sourceDbName);
    const targetDb = client.db(targetDbName);

    const collections = await sourceDb.listCollections().toArray();
    console.log(
      "Collections:",
      collections.map((collection) => collection.name)
    );

    for (const collection of collections) {
      console.log(`Copying collection: ${collection.name}`);
      const sourceCollection = sourceDb.collection(collection.name);
      const targetCollection = targetDb.collection(collection.name);

      // Perform the copy using the aggregate and $out stage
      await sourceCollection
        .aggregate([{ $match: {} }, { $out: targetCollection.collectionName }])
        .toArray();
    }

    console.log("All collections copied successfully");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    client.close();
  }
})();
