import React from "react";
import "./FounderBanner.scss";
import FounderPicture from "../../Assets/Images/founder-of-company.png";
import Signature from "../../Assets/Images/Signature.png";

export default function Quote() {
  return (
    <section className="FounderBanner">
      <blockquote>
        "Even if you don't have a ready sketch of what you want - we will help
        you to get the result you dreamed of."
      </blockquote>

      <div className="Founder">
        <img src={FounderPicture} alt="David Oswald" />

        <div className="FounderName">
          <h2>David Oswald</h2>
          <div>Founder of Company</div>
        </div>
        <img src={Signature} alt="Oswald Signature" className="Signature" />
      </div>
    </section>
  );
}
