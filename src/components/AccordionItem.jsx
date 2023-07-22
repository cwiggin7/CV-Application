import { useState } from "react";
import PropTypes from "prop-types";

function AccordionItem({ title, children }) {
  const [selected, setSelected] = useState(false);

  const toggle = () => {
    setSelected(!selected);
  };

  return (
    <div className="item">
      <div className="title" onClick={() => toggle()}>
        <h2>{title}</h2>
        <span>{selected ? "-" : "+"}</span>
      </div>
      <div className={selected ? "content show" : "content"}>{children}</div>
    </div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.children,
};

export default AccordionItem;
