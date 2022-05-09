import React from "react";
import Lucas from "../public/img/Lucas.jpg";
import Steven from "../public/img/Steven.jpg";
import Marcus from "../public/img/Marcus.jpg";
import Image from "next/image";

function omOs() {
  return (
    <>
      <div className="text-center text-4xl font-display bg-yellow-400 h-20 align-middle flex justify-center items-center">
        <h1 className="">Omkring os</h1>
      </div>

      <div className="flex flex-row justify-center mx-32" id="image container">
        <div className="flex flex-col self-center">
          <div className="relative w-56 h-48 ">
            <Image src={Lucas} layout="fill" className="object-cover" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            fugiat?
          </p>
        </div>
        <div className="flex flex-col">
          <div className="relative w-56 h-48 ">
            <Image src={Steven} layout="fill" className="object-cover" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            officia.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="relative w-56 h-48">
            <Image src={Marcus} layout="fill" className="object-cover" />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, et.
          </p>
        </div>
      </div>
    </>
  );
}

export default omOs;
