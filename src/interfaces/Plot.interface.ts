import { SensorData } from "./SensorData.interface";

export interface Plot {
  _id: number;
  data: SensorData[];
  name: string;
  createdAt: string;
}
