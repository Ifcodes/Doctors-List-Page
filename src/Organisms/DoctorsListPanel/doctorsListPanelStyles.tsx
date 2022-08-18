import styled from "styled-components";

export const DoctorsListWrapper = styled.fieldset`
  width: 100%;
  height: 80vh;
  border: 1px solid ${({ theme }) => theme.colors.grey5};
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 10px;
  overflow: hidden;

  .search-wrapper {
    display: flex;
    justify-content: center;
  }
`;
