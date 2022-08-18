import React, { MouseEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.button<{ isAdd?: boolean; isActive?: boolean }>`
  padding: 0.8rem 4em;
  border-radius: 10px;
  border: ${(props) => (props.isAdd ? "1px solid #7165E3" : "none")};
  background-color: ${(props) =>
    props.isActive ? "#7165E3" : props.isAdd ? "white" : "#7165E3"};
  color: ${(props) =>
    props.isActive ? "white" : props.isAdd ? "#7165E3" : "white"};
  font-weight: 500;
  cursor: pointer;

  :hover {
    background-color: ${(props) => (props.isAdd ? "#7165E3" : "white")};
    color: ${(props) => (props.isAdd ? "white" : "#07a807")};
    border: 1px solid #7165e3;
  }
`;

const Button = ({
  btnText,
  isAddBtn,
  isActive,
  type,
  onClick,
}: {
  btnText?: string;
  isAddBtn?: boolean;
  isActive?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Wrapper isAdd={isAddBtn} isActive={isActive} onClick={onClick} type={type}>
      {btnText}
    </Wrapper>
  );
};

export default Button;
