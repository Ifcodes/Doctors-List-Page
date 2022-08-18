import styled, { css } from "styled-components";

type Props = {
  theadBg?: string;
  scroll?: boolean;
};

export const TableWrapper = styled.div<Props>`
  height: 85%;
  flex-grow: 1;
  overflow-y: hidden;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;

  .table-container {
    height: 50%;
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.accentWhite};
    border-radius: 10px;
  }

  .empty-data {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
  }

  table {
    flex-grow: 1;
    display: grid;
    color: ${({ theme }) => theme.colors.grey2};
    grid-template-rows: auto 1fr;
    height: 100%;

    thead {
      background: ${({ theme }) => theme.colors.grey5};
      border-radius: 0.5rem;
      text-transform: Uppercase;
      margin: 1rem;
    }

    tbody {
      flex-grow: 1;
      overflow-y: auto;
      padding-top: 0.6rem;
      margin: 0 1rem 1rem;

      tr {
        td {
          font-size: 0.8rem;
          line-height: 1.2;
          font-weight: 500;
        }
      }

      tr:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.grey5};
        margin-bottom: 1rem;
      }
    }

    th {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.28571429;
      padding: 0.8rem 0 0.9rem;
      font-weight: 600;
      /* text-align: center; */

      & > div {
        display: flex;
        align-items: center;
        padding-left: 1rem;
        /* justify-content: center; */
      }
    }

    tr {
      display: table;
      table-layout: fixed;
      width: 100%;
    }

    td {
      padding: 0.5rem 1rem;
      text-align: left;
    }
  }
  .table-foot {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.grey1};
      margin-left: 1rem;
    }
  }
`;

export const TableWrapperMobile = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;

    .table-item-cont {
      display: flex;
      align-items: center;
      border-top: 1px solid ${({ theme }) => theme.colors.grey5};
      padding: 0.6rem 1rem;
    }

    .row-items {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-left: 0;
    }

    .title-info {
      font-size: 12px;
      font-weight: 600;
    }
    .other-info {
      color: ${(props) => props.theme.colors.grey2};
    }
  }
`;
