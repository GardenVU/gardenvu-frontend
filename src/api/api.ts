import axios from "axios";
import { Plot } from "../interfaces/Plot.interface";
import { SensorData } from "../interfaces/SensorData.interface";
import { API_URL } from "../utils/constants.util";

/**
 * Retrieves plot information from the API.
 * @returns A Promise that resolves to an array of Plot objects.
 */
export async function getPlotInformation(): Promise<Plot[]> {
  return axios.get(`${API_URL}/getPlotInformation.php`).then((res) => res.data);
}

/**
 * Retrieves sensor data from the server.
 * @param num_points The number of data points to retrieve.
 * @returns A promise that resolves to an array of objects containing plot ID and sensor data.
 */
export async function getSensorData(
  num_points: number,
): Promise<{ plot_id: number; data: SensorData[] }[]> {
  return axios
    .get(`${API_URL}/getSensorData.php`, {
      params: {
        num_points,
      },
    })
    .then((res) => res.data);
}

/**
 * Retrieves the history of sensor data for a specific plot within a given date range.
 * @param plot_id - The ID of the plot.
 * @param dateRange - An array containing the start and end dates of the range.
 * @returns A promise that resolves to an array of SensorData objects representing the sensor data history.
 */
export async function getHistory(
  plot_id: number,
  dateRange: [Date | null, Date | null],
): Promise<SensorData[]> {
  return axios
    .get(`${API_URL}/getHistory.php`, {
      params: {
        plot_id,
        start_date: dateRange[0]?.toISOString(),
        end_date: dateRange[1]?.toISOString(),
      },
    })
    .then((res) => res.data);
}
