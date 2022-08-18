import React from "react";
import { PropTypes } from ".";
import Loader from "../../Atoms/Loader";
import { TableWrapperMobile } from "./tableStyles";

interface MobilePropTypes extends PropTypes {
  toggleSelect?: Function;
  onSelectAll?: Function;
  mobileDefault?: boolean;
  isLoading?: boolean;
  customRow?: string;
}

const TableMobile = ({
  id = "",
  headings = [
    { name: "USER", key: "user" },
    { name: "AMOUNT", key: "amount" },
  ],
  tableData,
  isLoading,
  customRow,
}: MobilePropTypes) => {
  if (isLoading) return <Loader />;
  return (
    <TableWrapperMobile>
      <div className="table-cont">
        {tableData &&
          tableData.map((row: any, rowIndex) => (
            <div key={`row-key-${rowIndex}`} className={`table-item-cont`}>
              <div className={customRow || "row-items"}>
                {headings.map((col, colIndex) => (
                  <div key={`col-key-${colIndex}`}>{row[col.key]}</div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </TableWrapperMobile>
  );
};

export default TableMobile;
