import React, { useState, useEffect } from "react";
import "./commitments.css";

export default function Commitments() {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [count3, setCount3] = useState<number>(0);
  const [count4, setCount4] = useState<number>(0);
  const targetValue1 = 245;
  const targetValue2 = 130;
  const targetValue3 = 50;
  const targetValue4 = 24;
  useEffect(() => {
    const incrementCount = () => {
      if (count1 < targetValue1) {
        setCount1((prevCount) => prevCount + 1);
      }
      if (count2 < targetValue2) {
        setCount2((prevCount) => prevCount + 1);
      }
      if (count3 < targetValue3) {
        setCount3((prevCount) => prevCount + 1);
      }
      if (count4 < targetValue4) {
        setCount4((prevCount) => prevCount + 1);
      }
    };
    const interval = setInterval(incrementCount, 8);
    return () => {
      clearInterval(interval);
    };
  }, [
    count1,
    count2,
    count3,
    count4,
    targetValue1,
    targetValue2,
    targetValue3,
    targetValue4,
  ]);

  return (
    <div className="commitments">
      <div  className="commitcounter" >
        <div className="counter1">
          <span>
            <h1 className="count">{count1}%</h1>
            <p className="countdesc">More revenues for the brand</p>
          </span>
          <span>
            <h1 className="count">{count2}K+</h1>
            <p className="countdesc">Audiences reached</p>
          </span>
        </div>
        <div className="counter2">
          <span>
            <h1 className="count1" style={{ marginTop: "60px" }}>
              {count3}+
            </h1>
            <p className="countdesc">brands trust us</p>
          </span>
          <span>
            <h1 className="count2" style={{ marginTop: "60px" }}>
              {count4}+
            </h1>
            <p className="countdesc">Worldwide awards</p>
          </span>
        </div>
      </div>
      <div className="Counttext">
        <span className="counttitle">Commitments</span>
        <p className="Counttextdesc">
          We are committed to working with you collaboratively to understand
          your goals and create a strategy that will achieve them.
        </p>
        <button className="link">
          Learn More&nbsp;
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="linksvg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 6.53216C0 6.28471 0.0982978 6.0474 0.273269 5.87243C0.44824 5.69746 0.685551 5.59916 0.932997 5.59916H11.7427L7.73641 1.59474C7.56122 1.41955 7.4628 1.18193 7.4628 0.934176C7.4628 0.686417 7.56122 0.448806 7.73641 0.273614C7.9116 0.098422 8.14921 0 8.39697 0C8.64473 0 8.88234 0.098422 9.05754 0.273614L14.6555 5.8716C14.7424 5.95826 14.8113 6.06122 14.8584 6.17457C14.9054 6.28792 14.9296 6.40944 14.9296 6.53216C14.9296 6.65488 14.9054 6.77639 14.8584 6.88974C14.8113 7.00309 14.7424 7.10605 14.6555 7.19272L9.05754 12.7907C8.88234 12.9659 8.64473 13.0643 8.39697 13.0643C8.14921 13.0643 7.9116 12.9659 7.73641 12.7907C7.56122 12.6155 7.4628 12.3779 7.4628 12.1301C7.4628 11.8824 7.56122 11.6448 7.73641 11.4696L11.7427 7.46516H0.932997C0.685551 7.46516 0.44824 7.36686 0.273269 7.19189C0.0982978 7.01692 0 6.7796 0 6.53216Z"
              fill="#3461FF"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
