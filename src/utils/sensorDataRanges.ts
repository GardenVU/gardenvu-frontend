export const temperatureRange = {
  good: { min: 68, max: 72 },
  warn: [
    { min: 65, max: 68 },
    { min: 72, max: 75 },
  ],
  danger: [
    { min: Number.MIN_SAFE_INTEGER, max: 65 },
    { min: 75, max: Number.MAX_SAFE_INTEGER },
  ],
};

export const phRange = {
  good: { min: 6.5, max: 7.5 },
  warn: [
    { min: 6, max: 6.5 },
    { min: 7.5, max: 8 },
  ],
  danger: [
    { min: Number.MIN_SAFE_INTEGER, max: 6 },
    { min: 8, max: Number.MAX_SAFE_INTEGER },
  ],
};

export const tdsRange = {
  good: { min: 300, max: 500 },
  warn: [
    { min: 200, max: 300 },
    { min: 500, max: 600 },
  ],
  danger: [
    { min: Number.MIN_SAFE_INTEGER, max: 200 },
    { min: 600, max: Number.MAX_SAFE_INTEGER },
  ],
};

export const waterLevelRange = {
  good: { min: 10, max: 15 },
  warn: [
    { min: 5, max: 10 },
    { min: 15, max: 20 },
  ],
  danger: [
    { min: Number.MIN_SAFE_INTEGER, max: 5 },
    { min: 20, max: Number.MAX_SAFE_INTEGER },
  ],
};

export enum SensorDateRangeColor {
  GOOD = "green",
  WARN = "yellow",
  DANGER = "red",
  DEFAULT = "gray",
}
