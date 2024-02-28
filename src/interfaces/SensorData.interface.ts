export interface SensorData {
  _id: string;
  temperature: number;
  pH: number;
  tds: number;
  waterLevel: number;
  timestamp: string;
}

export enum SensorDataName {
  TEMPERATURE = "temperature",
  PH = "pH",
  TDS = "tds",
  WATERLEVEL = "waterLevel",
  TIMESTAMP = "timestamp",
}

export enum SensorDataTitle {
  TEMPERATURE = "Temperature",
  PH = "pH",
  TDS = "TDS",
  WATERLEVEL = "Water Level",
}

export enum SensorDataColors {
  TEMPERATURE = "blue",
  PH = "green",
  TDS = "orange",
  WATERLEVEL = "purple",
  DEFAULT = "gray",
}
