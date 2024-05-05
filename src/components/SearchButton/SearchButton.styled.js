import styled from "styled-components";

export const Button = styled.button`
  border-radius: 12px;
  padding: 14px 44px;
  background: #3470ff;
  border: transparent;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #fff;
  transition:
    background-color 300ms linear,
    box-shadow 300ms linear;
  &:focus,
  &:hover {
    background: #0b44cd;
  }
`;
