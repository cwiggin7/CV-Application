import PropTypes from "prop-types";

function ExperienceInfoSection({ onRemove }) {
  return (
    <div className="experience-container">
      <form>
        <input type="text" placeholder="Job Title" className="job-title" />
        <input type="text" placeholder="Company" className="company" />
        <input type="text" placeholder="City" className="city" />

        <div className="JobDuration">
          <label htmlFor="start-date">Start Date</label>
          <input type="date" name="start-date" className="start-date" />

          <label htmlFor="end-date">End Date</label>
          <input type="date" name="end-date" className="end-date" />
        </div>
        <input
          placeholder="What did you do?"
          className="job-responsibilities"
        />
      </form>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

ExperienceInfoSection.propTypes = {
  onRemove: PropTypes.func,
};

export default ExperienceInfoSection;
