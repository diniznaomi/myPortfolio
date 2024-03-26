import React, { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

export const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Altere o intervalo conforme necessário (por exemplo, 5000ms = 5 segundos)

    return () => clearInterval(intervalId);
  }, [current]); // Atualizar o intervalo quando o estado current mudar

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500" // Adicionando transição
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt={`Slide ${index}`} className="w-full" />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button onClick={previousSlide} className="text-white text-3xl focus:outline-none">
          <BsFillArrowLeftCircleFill size={22} style={{ marginLeft: '5px', color: '#1e293b' }} />
        </button>
        <button onClick={nextSlide} className="text-white text-3xl focus:outline-none ">
          <BsFillArrowRightCircleFill size={22} style={{ marginRight: '5px', color: '#1e293b'}} />
        </button>
      </div>
    </div>
  );
};
