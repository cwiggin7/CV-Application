import "./App.css";
import BasicInfoSection from "./components/BasicInfoSection";
import ExperienceInfoSection from "./components/ExperienceInfoSection";
import EducationSection from "./components/EducationSection";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [experienceSections, setExperienceSections] = useState([
    { id: uuidv4() },
  ]);
  const [educationSections, setEducationSections] = useState([
    { id: uuidv4() },
  ]);

  const removeExperienceSection = (index) => {
    setExperienceSections((prevExperienceSections) => {
      const updatedSections = [...prevExperienceSections];
      updatedSections.splice(index, 1);
      return updatedSections;
    });
  };

  const addExperienceSection = () => {
    setExperienceSections((prevExperienceSections) => {
      const updatedSections = [...prevExperienceSections];
      updatedSections.push({ id: uuidv4() });
      return updatedSections;
    });
  };

  const removeEducationSection = (index) => {
    setEducationSections((prevEducationSections) => {
      const updatedSections = [...prevEducationSections];
      updatedSections.splice(index, 1);
      return updatedSections;
    });
  };

  const addEducationSection = () => {
    setEducationSections((prevEducationSections) => {
      const updatedSections = [...prevEducationSections];
      updatedSections.push({ id: uuidv4() });
      return updatedSections;
    });
  };

  return (
    <div className="app-container">
      <div className="resume">
        <BasicInfoSection />

<div className="experience-header">Experience</div>
        {experienceSections.map((e, index) => (
          <ExperienceInfoSection
            key={e.id}
            onRemove={() => removeExperienceSection(index)}
          />
        ))}
        <button onClick={addExperienceSection}>Add Job</button>

        <div className="experience-header">Education</div>
        {educationSections.map((e, index) => (
          <EducationSection
            key={e.id}
            onRemove={() => removeEducationSection(index)}
          />
        ))}
        <button onClick={addEducationSection}>Add Education</button>
      </div>
    </div>
  );
}

export default App;
