import { Plot } from "../interfaces/Plot.interface";
import { SensorData } from "../interfaces/SensorData.interface";

/**
 * Merges sensor data into an array of plots. Places the sensor data into the 'data' property of
 * the plot for matching plot IDs.
 *
 * @param plots - An array of plots.
 * @param sensorDataResp - An array of objects containing plot IDs and sensor data.
 * @returns An array of plots with merged sensor data.
 */
export const mergeData = (
  plots: Plot[],
  sensorDataResp: { plot_id: number; data: SensorData[] }[],
): Plot[] => {
  const mergedData = plots.map((plot) => {
    const sensorData = sensorDataResp.some(
      (sensorData) => sensorData.plot_id === plot.id,
    )
      ? sensorDataResp
          .find((sensorData) => sensorData.plot_id === plot.id)
          ?.data.map((data) => ({
            ...data,
            time_collected: new Date(data.time_collected).toISOString(),
          }))
      : null;
    if (sensorData) {
      return {
        ...plot,
        sensorData: sensorData as SensorData[],
      };
    }
    return plot;
  });
  return mergedData;
};
