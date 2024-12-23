// run below command from project root (same level as package.json)
// node src/scripts/deleteOldTestData.js

const { initializeCosmosDb, getContainer } = require("../startup/cosmosDb");

const deleteOldTestData = async () => {
  await initializeCosmosDb();
  const container = getContainer();

  try {
    const { resources: items } = await container.items
      .query({
        query: `SELECT * FROM c WHERE c.type = 'testData' AND NOT IS_DEFINED(c.userId)`,
      })
      .fetchAll();

    for (const item of items) {
      await container.item(item.id, item.userId || null).delete();
      console.log(`Deleted item: ${item.id}`);
    }

    console.log("Old test data deleted successfully.");
  } catch (error) {
    console.error("Error deleting test data:", error.message);
  }
};

deleteOldTestData();
