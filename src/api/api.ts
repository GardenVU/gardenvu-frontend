import axios from "axios";

const API_URL = "URL";

export async function getSensorData(points: number) {
  return axios.get(`${API_URL}/sensorData`, {
    params: {
      points,
    },
  });
}

export async function getHistory(
  plot: string,
  startDate: string,
  endDate: string,
) {
  return axios.get(`${API_URL}/history`, {
    params: {
      plot,
      startDate,
      endDate,
    },
  });
}
