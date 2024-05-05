import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .form {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 18px;
    margin-bottom: 50px;
  }

  .labelText {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: #8a8a89;
  }

  .brandWidth {
    width: 224px;
  }

  .containerPrice {
    position: relative;
  }

  .priceWidth {
    width: 125px;
  }

  .priceValue {
    position: absolute;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11111;
    color: #121417;
    z-index: 1;
    top: 50%;
    left: 34px;
    transform: translateY(-50%);
  }
  .priceoutValue {
    position: absolute;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11111;
    color: #121417;
    z-index: 1;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }
`;

export const CustomStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: state.selectProps.isWide
      ? "11px 18px 9px 34px"
      : "11px 18px 9px 18px",
    cursor: "pointer",
    fontFamily: ["Roboto", "sans-serif"],
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: 1.11111,
    color: "#121417",
    boxShadow: "none",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    borderRadius: "14px",
    backgroundColor: "#f7f7fb",
    outline: "none",
    borderColor: "transparent",
    "&:hover": {
      borderColor: "rgba(18, 20, 23, 0.05)",
    },
    // height: 'auto',
    // [`@media ${device.tablet}`]: {
    //   width: '199px',
    //   fontSize: '17px',
    //   lineHeight: '1.56',
    // },
  }),
  singleValue: (provided) => ({
    ...provided,
    backgroundColor: "#f7f7fb",
    color: "#121417",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
  }),
  placeholder: (provided) => ({
    ...provided,
    padding: 0,
    width: "100%",
    backgroundColor: "#f7f7fb",
    fontFamily: ["Roboto", "sans-serif"],
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "1.11111",
    color: " #121417",
  }),
  menu: (provided) => ({
    ...provided,
    width: "100%",
    fontFamily: ["Roboto", "sans-serif"],
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: 1.11111,
    color: "#121417",

    border: "1px solid rgba(18, 20, 23, 0.05)",
    borderRadius: "14px",
    backgroundColor: "#f7f7fb",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0,
  }),
  clearIndicator: (provided) => ({
    ...provided,
    padding: 0,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
};
