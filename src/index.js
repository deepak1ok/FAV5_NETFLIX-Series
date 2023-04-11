import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";

ReactDOM.render(
  <>
    <h1 className="heading_style">Top 5 Netflix Series</h1>
    {Sdata.map((value) => (
      <Card
        key={value.id}
        imgSrc={value.imgsrc}
        title={value.title}
        sname={value.sname}
        links={value.links}
      />
    ))}
  </>,
  document.getElementById("root")
);
