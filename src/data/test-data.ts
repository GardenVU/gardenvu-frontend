import { Plot } from "../interfaces/Plot.interface";
import { SensorData } from "../interfaces/SensorData.interface";
import { faker } from "@faker-js/faker";

export const createTestData = (): SensorData => {
  return {
    _id: faker.number.int({ min: 1, max: 100 }),
    temperature: faker.number.int({ min: 0, max: 100 }),
    pH: faker.number.float({ min: 0, max: 14, multipleOf: 0.1 }),
    tds: faker.number.int({ min: 250, max: 1000 }),
    waterLevel: faker.number.int({ min: 0, max: 50 }),
    timestamp: faker.date.recent().toISOString(),
  };
};

export const createTestPlotData = (): Plot => {
  return {
    _id: faker.number.int({ min: 1, max: 100 }),
    name: faker.word.adjective() + " plot",
    data: Array.from({ length: 20 }, () => createTestData()),
    createdAt: faker.date
      .recent({ days: faker.number.int({ min: 5, max: 10 }) })
      .toISOString(),
  };
};

export const testPlotsData: Plot[] = Array.from({ length: 4 }, () =>
  createTestPlotData(),
);
