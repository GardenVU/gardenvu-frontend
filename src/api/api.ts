import axios from "axios";

const API_URL = "URL";

export async function getPlotInformation() {
  return axios.get(`${API_URL}/plots`);
}

export async function getPlotSummary() {
  return axios.get(`${API_URL}/plotsSummary`);
}

export async function getSensorData(plot_id: number, num_points: number) {
  return axios.get(`${API_URL}/sensorData`, {
    params: {
      plot_id,
      num_points,
    },
  });
}

export async function getHistory(
  plot_id: number,
  startDate: string,
  endDate: string,
) {
  return axios.get(`${API_URL}/history`, {
    params: {
      plot_id,
      startDate,
      endDate,
    },
  });
}
