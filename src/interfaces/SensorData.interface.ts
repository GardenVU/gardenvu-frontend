export interface SensorData {
  id: number;
  plot_id: number;
  temperature: number;
  pH: number;
  tds: number;
  time_collected: string;
}

export enum SensorDataName {
  TEMPERATURE = "temperature",
  PH = "pH",
  TDS = "tds",
  TIME_COLLECTED = "time_collected",
}

export enum SensorDataUnit {
  TEMPERATURE = "°F",
  PH = "",
  TDS = "ppm",
}

export enum SensorDataTitle {
  TEMPERATURE = "Temperature",
  PH = "pH",
  TDS = "TDS",
}

export enum SensorDataColors {
  TEMPERATURE = "purple",
  PH = "pink",
  TDS = "orange",
  DEFAULT = "gray",
}
