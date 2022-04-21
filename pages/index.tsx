import Image from "next/image";
import React from "react";
import Brev from "../components/Brev";
import News from "../components/News";
import Støts from "../components/Støts";
import Hero from "../public/img/abe.png";
import Monke from "../public/img/lilleabe.png";

function index() {
  return (
    <div>
      <div className="relative w-screen h-96 lg:h-screen text-white">
        <Image src={Hero} layout="fill" />
        <h1 className="text-5xl lg:text-9xl text-fill absolute py-20 lg:py-40 left-[20vw] lg:left-1/3">Red En Abe</h1>
        <button className="text-6xl absolute outline top-1/2 lg:top-2/3 left-[25vw] lg:left-[44vw]">Støt her</button>
      </div>

      <News />
      <Brev />

      <div className="relative w-full h-screen">
        <Image src={Monke} layout="fill" />
      </div>

      <Støts />
    </div>
  );
}

export default index;
