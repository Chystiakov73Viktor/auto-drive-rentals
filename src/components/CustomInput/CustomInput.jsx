import { WrapperDiv } from "./CustomInput.styled";

const CustomInput = ({ formik, handleMileageChange }) => {
  const { handleChange, handleBlur, values, touched, errors } = formik;

  return (
    <WrapperDiv>
      <label className="label">
        <div className="containerInputFrom">
          <span className="spanLabel">Car mileage / km</span>
          <div className="containerFrom">
            <span className="from">From</span>
            <input
              className="input inputFrom"
              type="text"
              name="from"
              value={values.from}
              onChange={(e) => {
                handleChange(e);
                handleMileageChange(e);
              }}
              onBlur={handleBlur}
            />
          </div>
        </div>
        {touched.from && errors.from ? (
          <div className="error">{errors.from}</div>
        ) : null}
      </label>
      <label className="label">
        <div className="containerTo">
          <span className="to">To</span>
          <input
            className="input inputTo"
            type="text"
            name="to"
            value={values.to}
            onChange={(e) => {
              handleChange(e);
              handleMileageChange(e);
            }}
            onBlur={handleBlur}
          />
        </div>
        {touched.to && errors.to ? (
          <div className="error">{errors.to}</div>
        ) : null}
      </label>
    </WrapperDiv>
  );
};

export default CustomInput;
