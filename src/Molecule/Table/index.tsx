import { Dispatch, ReactNode, useState } from "react";
import { generateId } from "../../Untils/generateId";
import { TableWrapper } from "./tableStyles";
import Pagination from "../../Atoms/Pagination";
import Loader from "../../Atoms/Loader";

export type paginationType = {
  totalRows: number;
  totalPages: number;
  currentPage: number;
  perPage: number;
  nextPage?: number;
  prevPage?: number;
};

export interface PropTypes {
  id?: string;
  headings?: Array<{ name: string; key: string }>;
  tableData?: Array<{
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
    };
    phone: string;
    website: string;
  }>;
  theadBg?: string;
  errorMessage?: string;
  isLoading?: boolean;
  hideMobile?: boolean;
  children?: ReactNode;
  meta?: paginationType;
  page?: number;
  scroll?: boolean;
  setPage?: Dispatch<React.SetStateAction<number>>;
}

const Table = ({
  headings = [
    { name: "NAME", key: "name" },
    { name: "USERNAME", key: "username" },
    { name: "EMAIL", key: "email" },
    { name: "City", key: "address" },
    { name: "PHONE", key: "phone" },
    { name: "WEBSITE", key: "website" },
  ],
  tableData,
  isLoading,
  theadBg,
  errorMessage,
  meta,
  children,
  page,
  setPage,
}: PropTypes) => {
  const [tableId] = useState(generateId());

  if (isLoading) return <Loader />;
  return (
    <TableWrapper scroll={true}>
      {errorMessage || tableData?.length === 0 ? (
        <>
          {tableData?.length === 0 && (
            <div className="empty-data">
              <span>No doctor found</span>
            </div>
          )}
          {errorMessage && (
            <div className="empty-data">
              <span>{errorMessage}!</span>
              <span>Check internet connection</span>
            </div>
          )}
        </>
      ) : (
        <>
          <div className={`table-container`}>
            <table className={`table`}>
              <thead>
                <tr>
                  {headings.map((heading, headingIndex) => (
                    <th key={headingIndex}>
                      <div className="flex">{heading.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData &&
                  tableData?.length > 0 &&
                  tableData.map((row: any, rowIndex: number) => (
                    <tr key={`${tableId}_table-row-${rowIndex}`}>
                      {headings.map((col, colIndex) => (
                        <td key={`${tableId}-row_${rowIndex}-col_${colIndex}`}>
                          {typeof row[col.key] === "object"
                            ? `${row[col.key].city}`
                            : row[col.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {meta && meta.totalPages > 1 && (
            <div className="table-foot">
              <p className="ml-4">
                Showing {meta?.perPage} of {meta?.totalRows}
              </p>
              <Pagination
                count={meta.totalPages}
                page={page}
                setPage={setPage}
              />
            </div>
          )}
        </>
      )}
    </TableWrapper>
  );
};

export default Table;
