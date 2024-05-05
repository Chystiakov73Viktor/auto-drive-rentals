import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMileageFiltered,
  setBrandFiltered,
  setPriceFiltered,
} from "../../redux/filter/reducer";
import { CustomStyles, Wrapper } from "./FilterForm.styled";
import * as yup from "yup";
import CustomSelect from "../CustomSelect";
import { selectCarsValue } from "../../redux/catalog/selects";
import CustomInput from "../CustomInput/CustomInput";
import { SearchButton } from "../SearchButton/SearchButton";

const validationSchema = yup.object().shape({
  brand: yup.string().required("Brands is required"),
  price: yup
    .string()
    .typeError("Price must be a string")
    .max(2, "Price must be maximum 2 characters long"),
});

export const FilterForm = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCarsValue);
  const [brandOptions, setBrandOptions] = useState([]);
  const [priceOptions, setPriceOptions] = useState([]);
  const [priceSelect, setPriceSelect] = useState(null);

  useEffect(() => {
    if (cars.length > 0) {
      const brandCar = Array.from(new Set(cars.flatMap((item) => item.make)));
      const prices = Array.from(
        new Set(cars.flatMap((item) => item.rentalPrice))
      );

      setBrandOptions(
        brandCar.map((brand) => ({ value: brand, label: brand }))
      );
      setPriceOptions(
        prices.map((price) => ({
          value: String(price).replace("$", ""),
          label: String(price).replace("$", ""),
        }))
      );
    }
  }, [cars]);

  const formik = useFormik({
    initialValues: {
      brand: "",
      price: "",
      from: "",
      to: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      dispatch(setBrandFiltered(null));
      dispatch(setPriceFiltered(null));
      dispatch(setMileageFiltered(null));

      resetForm();
    },
  });

  const handleBrandChange = (selectedOption) => {
    dispatch(setBrandFiltered(selectedOption?.value || null));
  };

  const handleInputChange = (inputValue) => {
    if (inputValue && inputValue.length <= 2) {
      setPriceSelect(inputValue);
      setFieldValue("price", inputValue);
    } else {
      setPriceSelect(null);
    }
  };

  const { handleSubmit, handleBlur, values, setFieldValue, touched, errors } =
    formik;

  const handleMileageChange = (e) => {
    const { name, value } = e.target;
    if (name === "from" || name === "to") {
      dispatch(
        setMileageFiltered(
          `${name === "from" ? value : values.from || ""}-${
            name === "to" ? value : values.to || ""
          }`
        )
      );
    }
  };

  const handlePriceChange = (selectedOption) => {
    if (selectedOption) {
      const selectedValue = selectedOption.value.toString();
      setPriceSelect(selectedValue);
      setFieldValue("price", selectedValue);
      dispatch(setPriceFiltered(selectedValue));
    } else {
      setPriceSelect(null);
      dispatch(setPriceFiltered(null));
      setFieldValue("price", "");
    }
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <span className="labelText">Car brand</span>
          <CustomSelect
            field={{
              name: "brand",
              value: values.brand,
              onChange: (value) => setFieldValue("brand", value),
              onBlur: handleBlur,
            }}
            options={brandOptions}
            placeholder="Enter the text"
            styles={CustomStyles}
            className="brandWidth"
            onChange={handleBrandChange}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
          />
        </label>
        <label>
          <span className="labelText">Price/ 1 hour</span>
          <div className="containerPrice">
            <span className="priceoutValue">
              {values.price || priceSelect
                ? "To " + String.fromCharCode(160).repeat(5) + "$"
                : "To $"}
            </span>
            <CustomSelect
              field={{
                name: "price",
                value: values.price,
                isWide: true,
                onChange: (value) => setFieldValue("price", value),
                onBlur: handleBlur,
              }}
              options={priceOptions}
              placeholder=""
              styles={CustomStyles}
              className="priceWidth"
              onInputChange={handleInputChange}
              inputValue={priceSelect}
              onChange={handlePriceChange}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            />
          </div>
        </label>
        <CustomInput
          formik={formik}
          handleMileageChange={handleMileageChange}
        />
        <SearchButton handleSubmit={formik.handleSubmit} />
      </form>
    </Wrapper>
  );
};
