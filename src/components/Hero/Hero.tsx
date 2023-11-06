import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="textsec">
        <div className="Herotitle">
          <span className="singleword">We&nbsp;</span>
          <span className="singleword">Take</span><br/>
          <span className="singleword">Care&nbsp;</span>
          <span className="singleword">of&nbsp;</span><br/>
          <span className="singleword">Your&nbsp;</span>
          <span className="singleword">Brand</span>
        </div>
         <div className="Herodesc">
          We care about our work and we care about our clients.
        </div>
        <div className="Herosearch">
          <input className="Heroemail" placeholder="Enter your Email" />
          <button className="talk">Lets Talk</button>
        </div>
      </div>
     <img
        src={require("./../../images/Heropic.jpg")}
        alt="pic"
        className="Heropic"
      />
    
    </div>
  );
}
