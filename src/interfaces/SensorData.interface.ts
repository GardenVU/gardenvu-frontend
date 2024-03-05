export interface SensorData {
  id: number;
  plot_id: number;
  temperature: number;
  pH: number;
  tds: number;
  waterLevel: number;
  time_collected: string;
}

export enum SensorDataName {
  TEMPERATURE = "temperature",
  PH = "pH",
  TDS = "tds",
  WATERLEVEL = "waterLevel",
  TIME_COLLECTED = "time_collected",
}

export enum SensorDataUnit {
  TEMPERATURE = "°F",
  PH = "",
  TDS = "ppm",
  WATERLEVEL = "cm",
}

export enum SensorDataTitle {
  TEMPERATURE = "Temperature",
  PH = "pH",
  TDS = "TDS",
  WATERLEVEL = "Water Level",
}

export enum SensorDataColors {
  TEMPERATURE = "blue",
  PH = "pink",
  TDS = "orange",
  WATERLEVEL = "purple",
  DEFAULT = "gray",
}
