import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api"
});

 export async function  adminConnect(data) {
  return await axios.post("http://localhost:8080/api/admin/login", data);
};
export async function createComplaint(data){
  console.log(data);
  
  return await axios.post("http://localhost:8080/api/complaints", data);
  
  
};

export const getAllComplaints = (token) => {
  return axios.get("/admin/complaints", {
    headers: { authorization: ` ${token}` }
  });
};

//