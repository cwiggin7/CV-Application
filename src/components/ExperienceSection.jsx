import PropTypes from "prop-types";

function ExperienceInfoSection({ onRemove }) {
  return (
    <div className="container">
      <form className="form">
        <input type="text" placeholder="Job Title" className="job-input" />
        <input type="text" placeholder="Company" className="company-input" />
        <input type="text" placeholder="City" className="city-input" />

        <div className="dates">
          <label htmlFor="start">Start Date</label>
          <input type="date" name="start" />

          <label htmlFor="end">End Date</label>
          <input type="date" name="end" />
        </div>
        <textarea
          className="responsibilities-input"
          rows="4"
          placeholder="What did you do?"
        />
      </form>
      <button className="remove-button" onClick={onRemove}>
        Remove Job
      </button>
    </div>
  );
}

ExperienceInfoSection.propTypes = {
  onRemove: PropTypes.func,
};

export default ExperienceInfoSection;
