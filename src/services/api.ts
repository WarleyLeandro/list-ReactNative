import axios from "axios";

const api = axios.create({
  baseURL: "https://random-data-api.com/api/v2",
  timeout: 1000 * 10,
  timeoutErrorMessage: "Demorou mais que o esperado",
});

export default api;
