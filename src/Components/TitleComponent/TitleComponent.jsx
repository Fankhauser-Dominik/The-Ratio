import React from "react";
import "./TitleComponent.scss";

export default function TitleComponent(props) {
  return (
    <div className="TitleComponent">
      <div>[ {props.section ? props.section : "Section"} ]</div>
      <h3>{props.title ? props.title : "Title"}</h3>
      <div className="Underline"></div>
    </div>
  );
}
