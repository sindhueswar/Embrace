import React, { useState } from "react";

import "./Help.css";

const helpdata = [
  {
    label: "How do i sign up for the project?",
    content: 'Icons are everywhere. These "little miracle workers" .',
  },
  {
    label: "What thing that i should  starting?",
    content: "Most assistive devices will read aloud text inserted via CSS",
  },
  {
    label: "Does my company need help advices?",
    content: "When your icon font fails, the browser treats it like any",
  },
];

export default function Help() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="help">
      <div className="helpaccordion">
        <hr />
        {helpdata.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <div
              className="accordiontitle"
              >
                <span className="accordion-label">{item.label}</span>
                <span
                  className={`accordion-icon  ${
                    activeIndex === index ? "minus" : "plus"
                  }`}
                >
                  <h2
                    className={`plusminus  ${
                      activeIndex === index ? "plusminusminus" : "plusminusplus"
                    }`}
                  >
                    {activeIndex === index ? "-" : "+"}
                  </h2>
                </span>
              </div>
              <hr className={activeIndex === index ? "hr1" : ""} />
            </div>
            {activeIndex === index && (
              <div className="accordion-contenthelp">{item.content}</div>
            )}
            <hr className={activeIndex === index ? "" : "hr2"} />
          </div>
        ))}
      </div>
       <div className ="helptext">
        <div>
        <div className="helpheader">How we can help you?</div>
        <p className="helpdesc">
          Follow our newsletter. We will regulary update
          <br className="updatebr" /> our latest project and availability.
        </p>
        </div>
        <div className="Herosearch1" >
          <input
            className="Heroemail1"
            placeholder="Enter your Email"
           
          />
          <div className="Helpbtns">
          <button className="talk1">Lets Talk</button>
            <div className="more-faq">
              More FAQ{" "}
              <svg
                className="vector5"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"                
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 6.53216C0 6.28471 0.0982978 6.0474 0.273269 5.87243C0.44824 5.69746 0.685551 5.59916 0.932997 5.59916H11.7427L7.73641 1.59474C7.56122 1.41955 7.4628 1.18193 7.4628 0.934176C7.4628 0.686417 7.56122 0.448806 7.73641 0.273614C7.9116 0.098422 8.14921 0 8.39697 0C8.64473 0 8.88234 0.098422 9.05754 0.273614L14.6555 5.8716C14.7424 5.95826 14.8113 6.06122 14.8584 6.17457C14.9054 6.28792 14.9296 6.40944 14.9296 6.53216C14.9296 6.65488 14.9054 6.77639 14.8584 6.88974C14.8113 7.00309 14.7424 7.10605 14.6555 7.19272L9.05754 12.7907C8.88234 12.9659 8.64473 13.0643 8.39697 13.0643C8.14921 13.0643 7.9116 12.9659 7.73641 12.7907C7.56122 12.6155 7.4628 12.3779 7.4628 12.1301C7.4628 11.8824 7.56122 11.6448 7.73641 11.4696L11.7427 7.46516H0.932997C0.685551 7.46516 0.44824 7.36686 0.273269 7.19189C0.0982978 7.01692 0 6.7796 0 6.53216Z"
                  fill="#3461FF"
                />
              </svg>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}



















// prepare before

// for marketing