import React from "react";
import SearchBox from "../../Atoms/SearchBox";
import AddDoctorForm from "../../Organisms/AddDoctorForm";
import DoctorsListPanel from "../../Organisms/DoctorsListPanel";
import { HomePageWrapper } from "./homepageStyles";

const Homepage = () => {
  return (
    <HomePageWrapper>
      <AddDoctorForm />
      <DoctorsListPanel />
    </HomePageWrapper>
  );
};

export default Homepage;
