import { SensorData } from "./SensorData.interface";

export interface Plot {
  _id: string;
  data: SensorData[];
  name: string;
  createdAt: string;
}
