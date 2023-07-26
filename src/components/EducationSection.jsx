import PropTypes from "prop-types";

function EducationSection({ onRemove }) {
  return (
    <div className="education-container">
      <form>
        <input type="text" placeholder="Degree and Field of Study" />
        <input type="text" placeholder="School or University" />
        <div className="SchoolDuration">
          <label htmlFor="start-date">Start Date</label>
          <input type="date" name="start-date" className="start-date" />

          <label htmlFor="end-date">End Date</label>
          <input type="date" name="end-date" className="end-date" />
        </div>
      </form>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

EducationSection.propTypes = {
  onRemove: PropTypes.func,
};

export default EducationSection;
