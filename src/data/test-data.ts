import { Plot } from "../interfaces/Plot.interface";
import { SensorData } from "../interfaces/SensorData.interface";
import { faker } from "@faker-js/faker";

export const createTestData = (): SensorData => {
  return {
    _id: faker.string.uuid(),
    temperature: faker.number.int({ min: 0, max: 100 }),
    pH: faker.number.float({ min: 0, max: 14, multipleOf: 0.1 }),
    tds: faker.number.int({ min: 0, max: 1000 }),
    waterLevel: faker.number.int({ min: 0, max: 100 }),
    timestamp: faker.date.recent().toISOString(),
  };
};

export const createTestPlotData = (): Plot => {
  return {
    _id: faker.string.uuid(),
    name: faker.word.adjective() + " plot",
    data: Array.from({ length: 10 }, () => createTestData()),
    createdAt: faker.date
      .recent({ days: faker.number.int({ min: 5, max: 10 }) })
      .toISOString(),
  };
};
