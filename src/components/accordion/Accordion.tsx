import React from "react";
import { Transition } from "react-transition-group";
import "./accordion.css";
interface AccordionProps {
  title: string;
  isOpen: boolean;
  icon: JSX.Element;
  onToggle: () => void;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  isOpen,
  icon,
  onToggle,
  children,
}) => {
  return (
    <div>
      <div
        className={`accordion ${isOpen ? "open" : ""}`}
        style={{ display: "flex" }}
      >
        <div onClick={onToggle}>{icon}</div>
        <div>
          <div
            className={`accordion-header ${isOpen ? "openheader" : ""}`}
            onClick={onToggle}
          >
            <h6 className="Accordiontitle">{title}</h6>
          </div>
          <Transition in={isOpen} timeout={30} unmountOnExit>
            {(state: string) => (
              <div
                className={`accordion-content accordion-${state}`}
                style={{ minHeight: isOpen ? "fitcontent" : "0" }}
              >
                {children}
              </div>
            )}
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
