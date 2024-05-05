import styled from 'styled-components';

export const WrapperDiv = styled.div`
  .containerButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .button {
    display: block;
    padding: 12px 20px;
    background: #3470ff;
    border: transparent;
    border-radius: 12px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    color: #fff;
    transition:
      background-color 300ms linear,
      box-shadow 300ms linear;
    &:hover {
      background: #0b44cd;
    }
  }
`;
