import styled from "styled-components";

export const SpinStyle = styled.div<{ color?: string; size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: transparent;
  border-radius: 50%;
  animation: spin 0.8s infinite linear;
  border: 3px solid transparent;
  border-top: 3px solid ${(props) => props.color || "#4d55bc"};
  border-left: 3px solid ${(props) => props.color || "#4d55bc"};
  border-bottom: 3px solid ${(props) => props.color || "#4d55bc"};
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Loader() {
  return (
    <LoaderWrapper>
      <SpinStyle size={"3rem"}></SpinStyle>
      <br />
      <h3>Loading...</h3>
    </LoaderWrapper>
  );
}

export default Loader;
