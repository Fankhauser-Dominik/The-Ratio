import React from "react";
import "./OurServices.scss";
import TitleComponent from "../TitleComponent/TitleComponent";
import CustomSolutions from "../../Assets/Images/iconbox1.1.png";
import DesignAndPlanning from "../../Assets/Images/iconbox1.2.png";
import FurnitureAndDecor from "../../Assets/Images/iconbox1.3.png";

export default function Services() {
  const StatsArray = [
    { quantity: 180, title: "Current Clients" },
    { quantity: 10, title: "Years of Expirience" },
    { quantity: 35, title: "Awards Winning" },
    { quantity: 5, title: "Offices Worldwide" },
  ];

  const ServicesArray = [
    {
      image: DesignAndPlanning,
      title: "Design & Planning",
      description: "We will help you to get the result you dreamed of.",
    },
    {
      image: CustomSolutions,
      title: "Custom Solutions",
      description: "Individual, aesthetically stunning solutions for cusomers.",
    },
    {
      image: FurnitureAndDecor,
      title: "Furniture & Decor",
      description: "We will create and produce our product design lines",
    },
  ];

  return (
    <section className="OurServices">
      <TitleComponent section="Our Services" title="What Can We Offer" />

      <div className="ServicesContainer">
        {ServicesArray.map((obj) => {
          return (
            <div className="Services">
              <img src={obj.image} alt="" />
              <h5>{obj.title}</h5>
              <p>{obj.description}</p>
              <div className="ReadMore">Read More</div>
            </div>
          );
        })}
      </div>

      <div className="StatsContainer">
        {StatsArray.map((obj, index) => {
          return (
            <div className="Stats" key={index}>
              <div className="Quantity">[{obj.quantity}+]</div>
              <div className="Title">{obj.title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
