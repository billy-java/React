import React, { useState } from "react";
import Indicator from "./Indicator/Indicator";
import CardBegin from "./Infos/CardBegin";
import CardEnd from "./Infos/CardEnd";
import DietForm from "./SubForms/DietForm";
import Allergies from "./SubForms/Allergies";
import Meinung from "./SubForms/Meinung";

import "./MultiForm.css";
import FoodStyle from "./SubForms/FoodStyle";

export default function Multiform() {
  const [formIndex, setFormIndex] = useState(1);
  const [allFormData, setAllFormData] = useState({
    dietForm: "",
    foodStyle: [],
    allergies: [],
    prefs: {},
  });

  const modifyIndex = (index, data) => {
    setFormIndex(index);

    if (data) {
      const newData = { ...allFormData };
      const firstPropNeuData = Object.keys(data)[0];
      console.log("firstPropNeuData : ", firstPropNeuData);
      newData[firstPropNeuData] = data[firstPropNeuData];
      setAllFormData(newData);
    }
  };

  console.log(allFormData);

  const elements = [
    <CardBegin modifyIndex={modifyIndex} />,
    <DietForm modifyIndex={modifyIndex} />,
    <FoodStyle modifyIndex={modifyIndex} />,
    <Allergies modifyIndex={modifyIndex} />,
    <Meinung modifyIndex={modifyIndex} />,
    <CardEnd modifyIndex={modifyIndex} />,
  ];

  return (
    <div className="container-multiform">
      <Indicator formIndex={formIndex} />

      {elements.map((element, index) => {
        if (formIndex === index + 1) {
          return elements[index];
        }
      })}

      {/* {formIndex === 1 ? (
        <CardBegin modifyIndex={modifyIndex} />
      ) : formIndex === 2 ? (
        <DietForm modifyIndex={modifyIndex} />
      ) : formIndex === 3 ? (
        <FoodStyle modifyIndex={modifyIndex} />
      ) : formIndex === 4 ? (
        <Allergies modifyIndex={modifyIndex} />
      ) : formIndex === 5 ? (
        <Meinung modifyIndex={modifyIndex} />
      ) : formIndex === 6 ? (
        <CardEnd modifyIndex={modifyIndex} />
      ) : (
        ""
      )} */}
    </div>
  );
}
