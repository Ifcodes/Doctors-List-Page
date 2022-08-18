import styled from "styled-components";

export const H1 = styled.h1<{ mt?: string; mb?: string }>`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ mt }) => mt || "0"};
  margin-bottom: ${({ mb }) => mb || "1rem"};
`;

export const Text = styled.span<{
  mt?: string;
  mb?: string;
  fs?: string;
  textColor?: string;
  fw?: string;
}>`
  font-size: ${({ fs }) => fs || "1rem"};
  color: ${({ theme, textColor }) => textColor || theme.colors.primary};
  font-weight: ${({ fw }) => fw || "400"};
  margin-top: ${({ mt }) => mt || "0"};
  margin-bottom: ${({ mb }) => mb || "1rem"};
`;
