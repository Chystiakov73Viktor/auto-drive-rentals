import styled from "styled-components";

export const LiWrapper = styled.li`
  .containerImgIcon {
    position: relative;
    border-radius: 14px;
  }

  .containerImg {
    width: 274px;
    height: 268px;
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
    top: 14px;
    right: 14px;
    padding: 0;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }

  .listInfo {
    display: flex;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
    margin-bottom: 8px;
  }

  .info:last-child {
    margin-left: auto;
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
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.5);
  }

  .address {
    margin-bottom: 4px;
  }

  .type {
    margin-bottom: 28px;
  }

  .buttonLearn {
    border-radius: 12px;
    padding: 12px 99px;
    width: 100%;
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
