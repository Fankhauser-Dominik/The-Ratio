import React, { useState, useEffect, useRef } from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./OurProfessionals.scss";
import JSONData from "../../Assets/Data/sample.json";

export default function OurProfessionals() {
  const ref = useRef();
  const [ModalProfile, setModalProfile] = useState(null);
  const JSONDataQuantity = JSONData.length;
  const ProfilePages = Math.ceil(JSONDataQuantity / 5);
  const [ActivePage, setActivePage] = useState(1);
  const [Seconds, setSeconds] = useState(0);
  const SliderSpeed = 5;

  // Modal close with click outside of Modal
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ModalProfile && ref.current && !ref.current.contains(e.target)) {
        setModalProfile(null);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [ModalProfile]);

  // Automatic Slider, but stops when Modal is open
  useEffect(() => {
    let interval = null;
    if (!ModalProfile) {
      interval = setInterval(() => {
        setSeconds((Seconds) => Seconds + 1);
      }, 1000);
      if (Seconds - 1 >= SliderSpeed) {
        clearInterval(interval);
        setSeconds(0);
        if (ActivePage >= ProfilePages) {
          setActivePage(1);
        } else {
          setActivePage((ActivePage) => ActivePage + 1);
        }
      }
    }
    return () => clearInterval(interval);
  }, [ActivePage, ProfilePages, ModalProfile, Seconds]);

  // Pagination
  const PaginationCreation = (number) => {
    let content = [];
    for (let i = 1; i <= number; i++) {
      if (i === ActivePage) {
        content.push(
          <div className="Circle Page" onClick={() => setActivePage(i)}>
            <div className="InnerCircle"></div>
          </div>
        );
      } else {
        content.push(
          <div className={"CirclePlaceholder"} onClick={() => setActivePage(i)}>
            <div className="InnerCircle"></div>
          </div>
        );
      }
    }
    return content;
  };

  return (
    <section className="ProfessionalsContainer">
      <TitleComponent
        section="Our Professionals"
        title="Meet Our Skilled Team"
      />
      <div className="ProfileContainer">
        {JSONData.map((obj, index) => {
          return (
            <div
              className={
                Math.floor(index / 5) + 1 === ActivePage ? "" : "Hidden"
              }
            >
              <div className="Overlay" onClick={() => setModalProfile(obj)}>
                <img
                  src={require("../../Assets/Images" + obj.profile_picture)}
                  alt="Professional"
                  className="ProfessionalPicture"
                />
                <div className="OverlayText">
                  <h5 className="ProfessionalName">
                    {obj.first_name} {obj.last_name}
                  </h5>
                  <div className="Plus">+</div>
                  <h6 className="ProfessionalTitle">[ {obj.job_title} ]</h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Pagination">{PaginationCreation(ProfilePages)}</div>
      {ModalProfile ? (
        <div className="Modal" ref={ref}>
          <img
            src={require("../../Assets/Images" + ModalProfile.profile_picture)}
            alt="Professional"
            className="ModalPicture"
          />
          <div className="NameAndDescription">
            <strong>
              {ModalProfile.first_name} {ModalProfile.last_name} -{" "}
              {ModalProfile.job_title}
            </strong>
            <p>{ModalProfile.description}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
