// Write a file that will merge the information from sensor data and plot information into the Plot[] arrays where teh sensor data that has plot_id == _id for a plot is in the data field data

import { Plot } from "../interfaces/Plot.interface";
import { SensorData } from "../interfaces/SensorData.interface";

export const mergeData = (plots: Plot[], sensorData: SensorData[]): Plot[] => {
  return plots.map((plot) => {
    const data = sensorData.filter((data) => data.plot_id === plot._id);
    return { ...plot, data };
  });
};
