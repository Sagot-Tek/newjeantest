// run below command from project root (same level as package.json)
// node src/scripts/populateTestData.js

const { initializeCosmosDb, getContainer } = require("../startup/cosmosDb");

const populateGlobalLeaders = async () => {
  await initializeCosmosDb();
  const container = getContainer();

  const globalLeaders = [
    {
      id: "ba18a6e6-8f14-49b0-87a3-21e265c20bdc",
      type: "globalLeader",
      userId: "26775626-bd0f-458b-8123-1cc67a1c0a8d",
      goalId: "70c61386-ed59-4d8f-8822-7c07cdf96cb8",
      completedDays: 15,
    },
    {
      id: "d2e76546-fa24-45cc-864f-d554c7b8053c",
      type: "globalLeader",
      userId: "761b28b9-38fc-4a94-a2a2-67bf1e7d9f91",
      goalId: "550e8400-e29b-41d4-a716-446655440009",
      completedDays: 20,
    },
    {
      id: "7d5e23ba-cada-45b4-abc1-789b8da8fb67",
      type: "globalLeader",
      userId: "123e4567-e89b-12d3-a456-426614174000",
      goalId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      completedDays: 25,
    },
    {
      id: "9a9025e3-3ea5-4624-a7fb-31e44ae98b5a",
      type: "globalLeader",
      userId: "98fbeced-6184-4f59-9ff8-1f546c7f458b",
      goalId: "550e8400-e29b-41d4-a716-446655440001",
      completedDays: 18,
    },
    {
      id: "940c83d6-00f9-43fe-bce9-d187580b9d29",
      type: "globalLeader",
      userId: "98fbeced-6184-4f59-9ff8-1f546c7f458b",
      goalId: "550e8400-e29b-41d4-a716-446655440002",
      completedDays: 22,
    },
    {
      id: "9dca871d-a8bc-4d3d-bcbd-4da00ee6c573",
      type: "globalLeader",
      userId: "a2c0e9e5-9d1e-44c3-86c5-4fe54787c792",
      goalId: "550e8400-e29b-41d4-a716-446655440003",
      completedDays: 30,
    },
    {
      id: "a1560e7b-baaf-42e3-aeaf-afccccaff4dd",
      type: "globalLeader",
      userId: "b7e13b34-4f25-4a9f-b87d-6379eebfb134",
      goalId: "550e8400-e29b-41d4-a716-446655440004",
      completedDays: 12,
    },
    {
      id: "9993b674-a42c-456c-92cc-98133c734b90",
      type: "globalLeader",
      userId: "1f9e2bb2-68f8-4a95-9303-8e20b97cbb2a",
      goalId: "550e8400-e29b-41d4-a716-446655440005",
      completedDays: 28,
    },
    {
      id: "bb06afa2-6703-4b2d-97e8-539d27884258",
      type: "globalLeader",
      userId: "3f0a6276-c8db-4729-92c3-067b3db4e91d",
      goalId: "550e8400-e29b-41d4-a716-446655440006",
      completedDays: 10,
    },
    {
      id: "9234fd60-a2af-438e-982f-cfd9119dd173",
      type: "globalLeader",
      userId: "fca920a8-dcb5-4d60-b88c-746003b47ae8",
      goalId: "550e8400-e29b-41d4-a716-446655440007",
      completedDays: 35,
    },
  ];

  try {
    for (const leader of globalLeaders) {
      await container.items.create(leader);
      console.log(`Inserted leader: ${leader.id}`);
    }
    console.log("All leaders successfully inserted.");
  } catch (error) {
    console.error("Error inserting global leaders:", error.message);
  }
};

populateGlobalLeaders();
