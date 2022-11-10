import React, { useState } from "react";
import { carData } from "../api/cars";
import { CarModel } from "./CarModel";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper";

export default function Cars() {
  const [input, setInput] = useState("");
  function changeHandle(e) {
    setInput(e.target.value);
  }
  const data = carData;
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        breakpoints={{
          800: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((car_pic) => {
          return (
            <SwiperSlide>
              <CarModel data={car_pic} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <br />
      <div className="Allcars">
        <h3>Search cars</h3>
        <div className="search-box">
          <input
            type="search"
            onChange={changeHandle}
            placeholder="Eg.SUV"
            value={input}
            className="textbox"
          />
        </div>

        <div className="container">
          {data
            .filter((value) => {
              if (input === "") return value;
              else if (
                value.bodyType.toLowerCase().match(input.toLowerCase())
              ) {
                return value;
              }
            })
            .map((data) => {
              return (
                <div>
                  <CarModel data={data} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
