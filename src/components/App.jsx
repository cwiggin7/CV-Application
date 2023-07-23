import "../styles/App.css";
import AccordionItem from "./AccordionItem";
import InputForm from "./InputForm";
import personalData from "../data/personalData";
import educationData from "../data/educationData";
import experienceData from "../data/experienceData";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="personal-info">
          <span>Your Personal Info</span>
          <InputForm inputData={personalData} />
        </div>
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

export default App;
