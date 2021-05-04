import axios from "axios";
import config from "config";

export default axios.create({
  baseURL: config.api.url,
  headers: {
    "x-rapidapi-key": config.api.rapidapiKey,
    "x-rapidapi-host": config.api.rapidapiHost,
  },
});
