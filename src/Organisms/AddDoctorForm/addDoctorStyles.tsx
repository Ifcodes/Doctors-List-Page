import styled from "styled-components";

export const DoctorFormWrapper = styled.form`
  width: 100%;

  .toast-color {
    color: ${({ theme }) => theme.colors.primary};
  }

  fieldset {
    border: 1px solid ${({ theme }) => theme.colors.grey5};
    padding: 1.5rem 1rem;
    border-radius: 10px;
  }

  .formfields-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
  }

  .btn-cont {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }
`;
