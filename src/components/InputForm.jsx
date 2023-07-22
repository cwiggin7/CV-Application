import PropTypes from "prop-types";

function InputForm({ inputData }) {
  return (
    <>
      {inputData.map((item) => (
        <div key={item.name}>
          <label htmlFor={item.name}>{item.label}</label>
          <input
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
          />
        </div>
      ))}
    </>
  );
}

InputForm.propTypes = {
  inputData: PropTypes.object,
};

export default InputForm;
