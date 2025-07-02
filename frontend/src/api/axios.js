import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Change to your backend URL if needed
});

export default instance;
