import { SensorData } from "./SensorData.interface";

export interface Plot {
  id: number;
  sensorData: SensorData[];
  name: string;
  created_at: string;
}
