import "../styles/App.css";
import BasicInfo from "./BasicInfo";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import jsPDF from "jspdf";
import domToImage from "dom-to-image";

function App() {
  const [experienceSections, setExperienceSections] = useState([
    { id: uuidv4() },
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

  const downloadPDF = () => {
    const capture = document.querySelector(".resume-wrapper");
    domToImage.toPng(capture).then((imgData) => {
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save("resume.pdf");
    });
  };

  return (
    <div className="app-container">
      <div className="download-button">
        <button onClick={downloadPDF}>Download as PDF</button>
      </div>
      <div className="resume-wrapper">
        <BasicInfo />

        <div className="section-container">
          <div className="section-header">Experience</div>
          {experienceSections.map((e, index) => (
            <ExperienceSection
              key={e.id}
              onRemove={() => removeExperienceSection(index)}
            />
          ))}
          <button className="add-button" onClick={addExperienceSection}>
            Add Job
          </button>
        </div>

        <div className="section-container">
          <div className="section-header">Education</div>
          {educationSections.map((e, index) => (
            <EducationSection
              key={e.id}
              onRemove={() => removeEducationSection(index)}
            />
          ))}
          <button className="add-button" onClick={addEducationSection}>
            Add Education
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
