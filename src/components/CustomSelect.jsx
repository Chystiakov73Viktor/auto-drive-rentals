import Select from 'react-select';

const CustomSelect = ({
  field,
  options = [],
  styles,
  placeholder,
  onChange,
  errors,
  touched,
  setFieldValue,
  onInputChange,
  inputValue,
  className
}) => {

  const selectedValue = inputValue || field.value;

  return (
    <>
      <Select
        name={field.name}
        styles={styles}
        isWide={field.isWide} 
        placeholder={placeholder}
        onInputChange={onInputChange}
        isClearable
        cacheOptions
        options={options}
        value={options.find(option => option.value === selectedValue) || ''}
        onChange={option => {
          setFieldValue(field.name, option ? option.value : '');
          onChange(option);
        }}
        onBlur={field.onBlur}
        className={className}
      />
      {errors[field.name] && touched[field.name] && (
        <div style={{ color: 'red' }}>{errors[field.name]}</div>
      )}
    </>
  );
};

export default CustomSelect;


// const CustomSelect = ({
//   field,
//   options = [],
//   styles,
//   placeholder,
//   onChange,
//   errors,
//   touched,
//   setFieldValue,
//   className
// }) => {
//   return (
//     <>
//       <Select
//         name={field.name}
//         styles={styles}
//         isWide={field.isWide} 
//         placeholder={placeholder}
//         isClearable
//         cacheOptions
//         options={options}
//         value={options.find(option => option.value === field.value) || ''}
        // onChange={option => {
        //   setFieldValue(field.name, option ? option.value : '');
        //   onChange(option);
        // }}
//         onBlur={field.onBlur}
//         className={className}
//       />
//       {errors[field.name] && touched[field.name] && (
//         <div style={{ color: 'red' }}>{errors[field.name]}</div>
//       )}
//     </>
//   );
// };

// export default CustomSelect;
