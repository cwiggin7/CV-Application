import PropTypes from "prop-types";

function EducationSection({ onRemove }) {
  return (
    <div className="education-container">
      <form className="education-form">
        <input
          type="text"
          placeholder="Degree and Field of Study"
          className="degree"
        />
        <input
          type="text"
          placeholder="School or University"
          className="school"
        />
        <label htmlFor="start-date">Start Date</label>
        <input type="date" name="start-date" className="start-date" />

        <label htmlFor="end-date">End Date</label>
        <input type="date" name="end-date" className="end-date" />
      </form>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

EducationSection.propTypes = {
  onRemove: PropTypes.func,
};

export default EducationSection;
