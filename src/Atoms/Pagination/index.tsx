import { Dispatch, } from "react";
import CaretLeft from "../vectors/CaretLeft";
import CaretRight from "../vectors/CaretRight";
import { PaginationWrapper } from "./paginationStyles";

type PaginationProps = {
  page?: number;
  count: number;
  setPage?: Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
  page = 1,
  count,
  setPage = () => {},
}: PaginationProps) => {
  const goTo = (page: number) => {
    if (page <= count) {
      setPage(page);
    }
  };
  return (
    <PaginationWrapper>
      {count > 1 ? (
        <>
          <button
            onClick={() =>
              setPage((prev: number) => (prev > 1 ? prev - 1 : prev))
            }
            disabled={page === 1}
            id="prev"
            className="btn-text"
          >
            <CaretLeft />
            Prev
          </button>
          <button onClick={() => goTo(page)} className="btn-text active">
            {page}
          </button>
          {count >= page + 1 && (
            <button
              onClick={() => goTo(page + 1)}
              value={page + 1}
              className={`btn-text`}
            >
              {page + 1}
            </button>
          )}
          {count >= page + 2 && (
            <button
              onClick={() => goTo(page + 2)}
              value={page + 2}
              className="btn-text"
            >
              {page + 2}
            </button>
          )}
          <button
            onClick={() =>
              setPage((prev: number) => (prev < count ? prev + 1 : prev))
            }
            disabled={page === count}
            className="btn-text"
            id="next"
          >
            Next
            <CaretRight />
          </button>
        </>
      ) : (
        <div></div>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
