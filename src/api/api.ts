import axios from "axios";
import { Plot } from "../interfaces/Plot.interface";
import { SensorData } from "../interfaces/SensorData.interface";

const API_URL = "http://localhost/gardenvu-copycode";

export async function getPlotInformation(): Promise<Plot[]> {
  return axios
    .get(`${API_URL}/getPlotInformation_handler.php`)
    .then((res) => res.data);
}

export async function getSensorData(num_points: number): Promise<SensorData[]> {
  return axios
    .get(`${API_URL}/getSensorData_handler.php`, {
      params: {
        num_points,
      },
    })
    .then((res) => res.data);
}

export async function getHistory(
  plot_id: number,
  startDate: string,
  endDate: string,
): Promise<SensorData[]> {
  return axios
    .get(`${API_URL}/getHistory_handler.php`, {
      params: {
        plot_id,
        startDate,
        endDate,
      },
    })
    .then((res) => res.data);
}
