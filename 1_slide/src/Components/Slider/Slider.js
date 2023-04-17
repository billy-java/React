import React, { useState } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";

export default function Slider() {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  const nextSlide = () => {
    if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {
      //instentions du setTimeout //donc slideAnim prend +1 deja ici
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true }); //slideAnim +1

      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index + 1, inProgress: false }); // ici slideAnim est deja a +1 depuis longtemps
        //slideAnim +1  on a pas +2 mais bien +1 car le setTimeout
        //est instensier au tout debut du if lorsqu'on entre dans la boucle IF
      }, 400);
    } else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({ index: 1, inProgress: true });

      setTimeout(() => {
        setSlideAnim({ index: 1, inProgress: false }); // ici slideAnim est deja a +1 depuis longtemps
        //slideAnim +1  on a pas +2 mais bien +1 car le setTimeout
        //est instensier au tout debut du if lorsqu'on entre dans la boucle IF
      }, 400);
    }
  };

  const prevSlide = () => {
    if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });

      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index - 1, inProgress: false }); // ici slideAnim est deja a +1 depuis longtemps
        //slideAnim +1  on a pas +2 mais bien +1 car le setTimeout
        //est instensier au tout debut du if lorsqu'on entre dans la boucle IF
      }, 400);
    } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: dataSlider.length, inProgress: true });

      setTimeout(() => {
        setSlideAnim({ index: dataSlider.length, inProgress: false }); // ici slideAnim est deja a +1 depuis longtemps
        //slideAnim +1  on a pas +2 mais bien +1 car le setTimeout
        //est instensier au tout debut du if lorsqu'on entre dans la boucle IF
      }, 400);
    }
  };

  const moveDot = (indexNeu) => {
    setSlideAnim({ index: indexNeu, inProgress: false });
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideAnim.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} //process.env.PUBLIC_URL url de notre site pour la phase production
              alt=""
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((itemNestPasUtil, index) => {
          //Array.from({ length: 5 }) ==> pour creer un tableau de 5 elements
          return (
            <div
              className={slideAnim.index === index + 1 ? "dot active" : "dot"}
              onClick={() => {
                moveDot(index + 1);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
