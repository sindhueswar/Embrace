import React from "react";
import "./accordion.css";
interface AccordionimageProps {
  Image: JSX.Element;
}
const Accordionimage: React.FC<AccordionimageProps> = ({ Image }) => {
  return <div className="imgtrans">{Image}</div>;
};
export default Accordionimage;
