import React from "react";
import { info } from "./assets/infoProjects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function Projects() {
  const myDataProjects = info;
  return (
    <Swiper
      className="bg-[#100f0fc2] cursor-ew-resize shadow-md shadow-[#1a1a1a4a] rounded-lg w-[70%]"
      loop
      spaceBetween={10}
      slidesPerView={1}
    >
      {myDataProjects.map((p) => (
        <SwiperSlide className="text-center" key={p.deploy}>
          <p className="text-white text-md font-extralight p-1">{p.description}</p>
          <h2 className="mt-4 text-slate-700 md:text-lg">
            ↓Clickea la imagen para ver el proyecto↓
          </h2>
          <a href={p.deploy}>
            <Image
              className="w-[70%] ml-auto mr-auto mt-3 md:w-[100%] "
              src={p.image}
              alt="img not found"
              width={1000}
              height={1000}
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
