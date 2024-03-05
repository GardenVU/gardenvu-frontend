import { SensorData } from "./SensorData.interface";

export interface Plot {
  id: number;
  data: SensorData[];
  name: string;
  created_at: string;
}
