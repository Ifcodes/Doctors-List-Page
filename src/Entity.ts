import { entity } from "simpler-state";

export const doctorsListEntity = entity([{
  name: "",
  username: "",
  email: "",
  address: { street: "", suite: "", city: "" },
  phone: "",
  website: "",
}]);

export const setDoctorsList = (data: any) => {
  doctorsListEntity.set(data)
}

export const addNewDoctor = (data: any) => {
  doctorsListEntity.set(prev => [...prev, data])
}