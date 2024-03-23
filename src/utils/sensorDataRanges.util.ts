export const temperatureRange = {
  good: { min: 68, max: 72 },
  warn: [
    { min: 65, max: 68 },
    { min: 72, max: 75 },
  ],
};

export const phRange = {
  good: { min: 6.5, max: 7.5 },
  warn: [
    { min: 6, max: 6.5 },
    { min: 7.5, max: 8 },
  ],
};

export const tdsRange = {
  good: { min: 300, max: 500 },
  warn: [
    { min: 200, max: 300 },
    { min: 500, max: 600 },
  ],
};

export enum SensorDateRangeColor {
  GOOD = "green",
  WARN = "yellow",
  DANGER = "red",
  DEFAULT = "gray",
}
