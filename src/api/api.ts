import axios from "axios";

const API_URL = "URL";

export async function getSensorData() {
  return axios.get(`${API_URL}/sensorData`);
}
