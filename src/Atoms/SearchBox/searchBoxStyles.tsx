import styled from "styled-components";

export const SearchBoxWrapper = styled.div<{
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  bgColor?: string;
  placeholderColor?: string;
  textColor?: string;
  textSize?: string;
}>`
  width: ${(props) => props.width || "50%"};
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.grey5};
  border-radius: ${(props) => props.borderRadius || "3rem"};
  background-color: ${(props) => props.bgColor || "transparent"};
  padding: 0 1rem;

  input {
    display: flex;
    flex-grow: 1;
    margin: 0 1rem;
    font-size: ${(props) => props.textSize || "1.3rem"};
    padding: 1rem 0;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.textColor || ""};
    ::placeholder {
      color: ${(props) => props.placeholderColor || ""};
    }
  }
`;
