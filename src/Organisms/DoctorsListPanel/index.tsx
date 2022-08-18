import React, { useEffect, useState } from "react";
import SearchBox from "../../Atoms/SearchBox";
import { H1 } from "../../Atoms/Typography";
import { doctorsListEntity, setDoctorsList } from "../../Entity";
import Table from "../../Molecule/Table";
import TableMobile from "../../Molecule/Table/tableMobile";
import { services } from "../../Services";
import { DoctorsListWrapper } from "./doctorsListPanelStyles";

const data = Array(20)
  .fill("")
  .map((_, index) => ({
    name: "Jalasem Ajala",
    username: "kagasta",
    email: "emai@gmail.com",
    address: { street: "home", suite: "fatom", city: "calc" },
    phone: "08102228633",
    website: "website.com",
  }));

const DoctorsListPanel = () => {
  const [searchField, setSearchField] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  const doctorsList = doctorsListEntity.use();

  useEffect(() => {
    try {
      services
        .getDoctorList()
        .then((res) => {
          setDoctorsList(res);
        })
        .catch((error) => {
          console.log({ error: error.message });
          setError(error.message);
        });
    } catch (error) {
      console.log({ error });
      setError("error");
    }
  }, []);

  const filteredList = doctorsList.filter(
    (data) =>
      data.username.toLowerCase().includes(searchField.toLowerCase()) ||
      data.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const tableData = searchField ? filteredList : doctorsList;

  return (
    <DoctorsListWrapper>
      <legend>
        <H1 mt="0" mb="0">
          Doctors List
        </H1>
      </legend>
      <div className="search-wrapper">
        <SearchBox
          placeholder="search doctors"
          placeholderColor="#E0E0E0"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
      </div>
      <Table
        setPage={setPage}
        page={page}
        tableData={tableData}
        errorMessage={error}
      />
      <TableMobile />
    </DoctorsListWrapper>
  );
};

export default DoctorsListPanel;
