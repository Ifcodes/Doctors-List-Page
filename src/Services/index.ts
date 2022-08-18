import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/users ";

const getDoctorList = async () => {
  const response = await axios.get(baseUrl);
  console.log(response.data);
  return response.data;
};

const postDoctor = async (data: any) => {
 const response = await axios.get(baseUrl, data);
 return response;
};

export const services = {
  getDoctorList,
  postDoctor,
};
