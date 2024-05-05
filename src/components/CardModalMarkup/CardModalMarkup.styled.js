import styled from "styled-components";

export const LiWrapper = styled.li`
  position: relative;
  border-radius: 24px;
  width: 541px;
  height: 752px;
  background: #fff;
  padding: 40px;

  .containerImg {
    border-radius: 14px;
    width: 461px;
    height: 248px;
    margin-bottom: 14px;
  }

  .img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 14px;
    background: #f3f3f2,
      linear-gradient(
        180deg,
        rgba(18, 20, 23, 0.5) 0%,
        rgba(18, 20, 23, 0.5) 100%
      );
  }

  .buttonIcon {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 0;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }

  .listInfo {
    display: flex;
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    color: #121417;
    margin-bottom: 8px;
  }

  .model {
    color: #3470ff;
  }

  .comma {
    color: #121417;
  }

  .listContainer {
    display: flex;
    align-items: center;
  }

  .itemAddressType {
    font-size: 12px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.5);
  }

  .address {
    margin-bottom: 4px;
  }

  .type {
    margin-bottom: 14px;
  }

  .text {
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: #121417;
    margin-bottom: 24px;
  }

  .textFirst {
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    color: #121417;
    margin-bottom: 8px;
  }

  .functionally {
    margin-bottom: 24px;
  }

  .listButton {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
  }

  .itemButton {
    font-family: "Montserrat", sans-serif;
    border-radius: 35px;
    padding: 7px 14px;
    background: #f9f9f9;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: #363535;
  }

  .firstNumber {
    font-weight: 600;
    color: #3470ff;
  }

  .buttonRental {
    border-radius: 12px;
    padding: 12px 50px;
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
  }
`;
