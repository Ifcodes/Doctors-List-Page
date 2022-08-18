import styled from "styled-components";

export const PaginationWrapper = styled.div`
  width: max-content;
  padding: 1rem;
  display: flex;
  button {
    font-size: 0.875rem;
    margin: 0 0.3rem;
    font-weight: 400;
    letter-spacing: -0.002em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.grey2};
    padding: 5px 10px;
    border-radius: 4px;
    svg {
      margin: 0 0.5rem;
    }
    &.active {
      color: ${({ theme }) => theme.colors.grey1};
      background-color: #f5f5fa;
    }
  }
  #prev,
  #next {
    color: ${({ theme }) => theme.colors.grey1};
    &:disabled {
      color: ${({ theme }) => theme.colors.grey2};
    }
  }
  #prev {
    path {
      fill: ${({ theme }) => theme.colors.grey1};
    }
    &:disabled path {
      fill: ${({ theme }) => theme.colors.grey2};
    }
  }
  #next {
    path {
      stroke: ${({ theme }) => theme.colors.grey1};
    }
    &:disabled path {
      stroke: ${({ theme }) => theme.colors.grey2};
    }
  }
`;
