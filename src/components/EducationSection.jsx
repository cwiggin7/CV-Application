import PropTypes from "prop-types";

function EducationSection({ onRemove }) {
  return (
    <div className="container">
      <form className="form">
        <input
          type="text"
          placeholder="Degree and Major"
          className="degree-input"
        />
        <input type="text" placeholder="School Name" className="school-input" />
        <div className="dates">
          <label htmlFor="start">Start Date</label>
          <input type="date" name="start" />

          <label htmlFor="end">End Date</label>
          <input type="date" name="end" />
        </div>
      </form>
      <button className="remove-button" onClick={onRemove}>
        Remove School
      </button>
    </div>
  );
}

EducationSection.propTypes = {
  onRemove: PropTypes.func,
};

export default EducationSection;
