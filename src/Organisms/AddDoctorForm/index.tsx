import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../Atoms/Button";
import Input from "../../Atoms/Input";
import Loader from "../../Atoms/Loader";
import { H1 } from "../../Atoms/Typography";
import { addNewDoctor, setDoctorsList } from "../../Entity";
import { services } from "../../Services";
import { DoctorFormWrapper } from "./addDoctorStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddDoctorForm = () => {
  const [formField, setFormField] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    city: "",
    website: "",
  });

  const handleInputChange = (
    name: any,
    value: ChangeEvent<HTMLInputElement>
  ) => {
    setFormField((prev) => ({ ...prev, [name]: value.target.value }));
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, username, email, phone, city, website } = formField;

    const data = {
      name,
      username,
      email,
      address: {
        street: "",
        suite: "",
        city,
      },
      phone,
      website,
    };

    setIsLoading(true);
    services.postDoctor(data).then((res) => {
      setIsLoading(false);
      addNewDoctor(data);
      toast(`${name} added successfully!`);
      setFormField({
        name: "",
        username: "",
        email: "",
        phone: "",
        city: "",
        website: "",
      });

      // console.log(res);
    });
  };

  return (
    <DoctorFormWrapper onSubmit={handleSubmit}>
      <fieldset>
        <legend>
          <H1 mt="0" mb="0">
            Register New Doctor
          </H1>
        </legend>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="formfields-wrapper">
            <div>
              <Input
                value={formField.name}
                label="Name"
                placeholder="e.g John Doe"
                required
                type="text"
                onChange={(e) => handleInputChange("name", e)}
              />
            </div>
            <div>
              <Input
                value={formField.username}
                label="Username"
                placeholder="e.g JohnD"
                required
                type="text"
                onChange={(e) => handleInputChange("username", e)}
              />
            </div>
            <div>
              <Input
                value={formField.email}
                label="Email"
                placeholder="e.g johndoe@example.com"
                required
                type="email"
                onChange={(e) => handleInputChange("email", e)}
              />
            </div>
            <div>
              <Input
                value={formField.phone}
                label="Phone"
                placeholder="e.g 07001234567"
                required
                type="number"
                onChange={(e) => handleInputChange("phone", e)}
              />
            </div>
            <div>
              <Input
                value={formField.city}
                label="City"
                placeholder="e.g Abuja"
                required
                type="text"
                onChange={(e) => handleInputChange("city", e)}
              />
            </div>
            <div>
              <Input
                value={formField.website}
                label="Website"
                required
                placeholder="e.g example.com"
                type="text"
                onChange={(e) => handleInputChange("website", e)}
              />
            </div>
          </div>
        )}
        <div className="btn-cont">
          <Button btnText="Register" isAddBtn type="submit" />
        </div>
      </fieldset>
      <ToastContainer toastClassName={"toast-color"} />
    </DoctorFormWrapper>
  );
};

export default AddDoctorForm;
