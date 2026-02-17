import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const createComplaint = (data) => {
  return API.post("/complaints", data);
};

export const getAllComplaints = (token) => {
  return axios.get("/admin/complaints", {
    headers: { Authorization: `Bearer ${token}` }
  });
};