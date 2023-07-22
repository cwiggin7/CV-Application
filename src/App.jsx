import "./App.css";
import AccordionItem from "./components/AccordionItem";
import InputForm from "./components/InputForm";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="accordion">
          <AccordionItem title="Education">
            <InputForm inputData={educationData} />
          </AccordionItem>
          <AccordionItem title="Experience">
            <InputForm inputData={experienceData} />
          </AccordionItem>
        </div>
      </div>
    </>
  );
}

const educationData = [
  {
    label: "School Name",
    inputType: "text",
    name: "schoolName",
    placeholder: "Stanford University",
  },
  {
    label: "Major",
    inputType: "text",
    name: "major",
    placeholder: "Computer Science",
  },
  {
    label: "Start Date",
    inputType: "text",
    name: "startDate",
    placeholder: "Sep 2015",
  },
  {
    label: "End Date",
    inputType: "text",
    name: "endDate",
    placeholder: "Jun 2019",
  },
];

const experienceData = [
  {
    label: "Company Name",
    inputType: "text",
    name: "companyName",
    placeholder: "Google",
  },
  {
    label: "Job Title",
    inputType: "text",
    name: "jobTitle",
    placeholder: "Software Engineer",
  },
  {
    label: "Start Date",
    inputType: "text",
    name: "startDate",
    placeholder: "May 2022",
  },
  {
    label: "End Date",
    inputType: "text",
    name: "endDate",
    placeholder: "Aug 2022",
  },
  {
    label: "Job Responsibilities",
    inputType: "text",
    name: "jobResponsibilities",
    placeholder: "Enter Description",
  },
];

export default App;
