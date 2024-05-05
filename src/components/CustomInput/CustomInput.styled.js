import styled from "styled-components";

export const WrapperDiv = styled.div`
  display: flex;
  align-items: flex-end;
  .lebel {
  }

  .containerInputFrom {
    display: flex;
    flex-direction: column;
  }

  .spanLabel {
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: #8a8a89;
    margin-bottom: 8px;
  }
  .containerFrom {
    position: relative;
  }
  .from {
    position: absolute;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11111;
    color: #121417;
    z-index: 1;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
  }
  .containerTo {
    position: relative;
  }
  .to {
    position: absolute;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11111;
    color: #121417;
    z-index: 1;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
  }
  .input {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    padding: 15px 0 13px 24px;
    width: 160px;
    font-weight: 500;
    font-size: 18px;
    line-height: 111%;
    color: #121417;
    background: #f7f7fb;
    &::placeholder {
      font-weight: 500;
      font-size: 18px;
      line-height: 111%;
      color: #121417;
    }
    &:focus {
      outline: none;
      border: 1px solid rgba(18, 20, 23, 0.05);
    }
  }

  .inputFrom {
    padding-left: 72px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    border-radius: 14px 0 0 14px;
  }
  .inputTo {
    padding-left: 49px;
    border-radius: 0 14px 14px 0;
  }
`;
