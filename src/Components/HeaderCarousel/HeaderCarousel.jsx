import React from "react";
import "./HeaderCarousel.scss";
import { useState, useEffect } from "react";
import { ReactComponent as ArrowUp } from "../../Assets/Icons/ArrowUp.svg";

export default function HeaderCarousel() {
  const SliderImages = [
    "slider1-home1.jpeg",
    "slider2-home1.jpeg",
    "slider3-home1.jpeg",
  ];
  const [Seconds, setSeconds] = useState(0);
  const SliderSpeed = 5;
  const ImageQuantity = SliderImages.length - 1;
  const [CurrentSlider, setCurrentSlider] = useState(0);

  // Automatic Slider
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setSeconds((Seconds) => Seconds + 1);
    }, 1000);
    if (Seconds - 1 >= SliderSpeed) {
      clearInterval(interval);
      setSeconds(0);
      if (CurrentSlider >= ImageQuantity) {
        setCurrentSlider(0);
      } else {
        setCurrentSlider((CurrentSlider) => CurrentSlider + 1);
      }
    }
    return () => clearInterval(interval);
  }, [CurrentSlider, ImageQuantity, Seconds]);

  // Slider Backwards / Forward
  const Back = () => {
    if (CurrentSlider <= 0) {
      setCurrentSlider(ImageQuantity);
    } else {
      setCurrentSlider((CurrentSlider) => CurrentSlider - 1);
    }
    setSeconds(0);
  };

  const Forward = () => {
    if (CurrentSlider >= ImageQuantity) {
      setCurrentSlider(0);
    } else {
      setCurrentSlider((CurrentSlider) => CurrentSlider + 1);
    }
    setSeconds(0);
  };

  return (
    <div className="HeaderCarousel">
      <img
        src={require("../../Assets/Images/" + SliderImages[CurrentSlider])}
        alt="Header"
      />
      <h2 className="BackgroundHeader">Studio</h2>
      <div className="ForegroundContainer">
        <h3 className="ForegroundHeader">Best Furniture and Decor</h3>
        <p className="ForegroundText">
          We pride ourselves on being builders - creating architectural and
          creative solutions to help people realize their vision and make them a
          reality. Wanna work with us?
        </p>
        <button className="ForegroundButton">View Projects</button>
      </div>
      <div className="SliderButton">
        <ArrowUp className="LeftArrow" onClick={Back} />
        <ArrowUp className="RightArrow" onClick={Forward} />
      </div>
    </div>
  );
}
