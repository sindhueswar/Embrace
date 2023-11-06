import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import "./Slider.css";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLeftIconHovered, setIsLeftIconHovered] = useState(false);
  const [isRightIconHovered, setIsRightIconHovered] = useState(false);

  const iconStyle1 = {
    fill: isLeftIconHovered ? "#3461FF" : "lightgray",
    transition: "fill 0.3s",
    fontSize: 64,
    margin: 10,
  };

  const iconStyle2 = {
    fill: isRightIconHovered ? "#3461FF" : "lightgray",
    transition: "fill 0.3s",
    fontSize: 64,
    margin: 10,
  };

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + carouselData.length) % carouselData.length
    );
  };

  const carouselData = [
    {
      personsname: "Amelia Joseph",
      post: "Chief Manager",
      personsimage: "https://file.rendit.io/n/jo52LhdryoPiB5mMxPTw.png",
      opinion:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    },
    {
      personsname: "Jacob Joshua",
      post: "Chief Manager",
      personsimage: "https://file.rendit.io/n/adTinyEOzQnrK59F1Dv4.png",
      opinion:
        "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
    },
    {
      personsname: "Shgy Inmhgyu",
      post: "Chief Manager",
      personsimage: "https://file.rendit.io/n/Pc4Cehk7DYuUntaqvJt6.png",
      opinion:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    },
    {
      personsname: "Tlbvb Gdcdfe",
      post: "Chief Manager",
      personsimage: "https://file.rendit.io/n/jo52LhdryoPiB5mMxPTw.png",
      opinion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, tenetur voluptas. Consequuntur quo tenetur distinctio dolore cumque consequatur saepe atque sapiente",
    },
    {
      personsname: "Ffjhr Nhgftu",
      post: "Chief Manager",
      personsimage: "https://file.rendit.io/n/adTinyEOzQnrK59F1Dv4.png",
      opinion:
        "Dorem cvdsssss gh bdipisicing elit. A cum est voluptatem veritatis quod veniam, eveniet ducimus deleniti expedita ipsa rerum",
    },
  ];

  return (
    <div className="slider">
      <div className="slidehead">
        <h2 className="slider-header">What Our Client Said about us</h2>
        <div className="icon-container">
          <BsFillArrowLeftCircleFill
            style={iconStyle1}
            onMouseOver={() => setIsLeftIconHovered(true)}
            onMouseOut={() => setIsLeftIconHovered(false)}
            onClick={prevSlide}
            className="slidericons"
          />
          <BsFillArrowRightCircleFill
            style={iconStyle2}
            onMouseOver={() => setIsRightIconHovered(true)}
            onMouseOut={() => setIsRightIconHovered(false)}
            onClick={nextSlide}
            className="slidericons"
          />
        </div>
      </div>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none",
          },
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        forwardBtnProps={{
          style: {
            display: "none",
          },
        }}
        backwardBtnProps={{
          style: {
            display: "none",
          },
        }}
        onRequestChange={setActiveSlide}
        speed={1000}
      >
        {carouselData.map((item, index) => (
          <div className="item-container" key={index}>
            <div className={`item ${activeSlide === index ? "active" : ""}`}>
              <span className="itemcontent">
                <span className="itemheader" style={{display:"flex"}}>
                  <img src={item.personsimage} className="personspic" alt="personspic" />
                  <span
                  className="Slidename"
                    style={{ }}
                  >
                    <span className="sliderheader">
                      {item.personsname}
                      <br />
                    </span>
                    <span className="Slider-post">
                      {item.post}
                      <br />
                    </span>
                  </span>
                </span>
                <div className="person-opinion"> {item.opinion}</div>
              </span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}


