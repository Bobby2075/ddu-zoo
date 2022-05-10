import Image from "next/image";
import React from "react";
import Lucas from "../public/img/Lucas.jpg";
import Marcus from "../public/img/Marcus.jpg";
import Steven from "../public/img/Steven.jpg";

function omOs() {
  return (
    <>
      <div className="text-center text-4xl font-display bg-yellow-400 h-20 align-middle flex justify-center items-center">
        <h1 className="">Omkring os</h1>
      </div>

      <div className=" mx-96 pt-10 text-center">
        <p>
          Vi er tre drenge som har lavet et multimedie projekt omkring truede
          dyrarter, fordi vi er meget intresseret for dyr, og vil gerne oplyse
          folk omkring de truede dyrarter, der findes. Derfor fik vi et
          interview med en biolog fra giveskud zoo af som kunne hjælpe med at
          oplyse omkring de truede dyr de har, og hvad de gør for at hjælpe
          dyrebestanden.
        </p>
      </div>

      <div className="mx-32 my-10">
        <div className="flex flex-col justify-center items-center w-full text-center mb-5">
          <div className="relative w-56 h-48 ">
            <Image src={Lucas} layout="fill" className="object-cover" />
          </div>
          <h1>Lucas</h1>
          <p>Lucas, har stået for animation for vores kampagne.</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full text-center mb-5">
          <div className="relative w-56 h-48 ">
            <Image src={Marcus} layout="fill" className="object-cover" />
          </div>
          <h1>Marcus</h1>
          <p>Marcus har stået for opsætning og kodning af hjemmesiden</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full text-center mb-5">
          <div className="relative w-56 h-48 ">
            <Image src={Steven} layout="fill" className="object-cover" />
          </div>
          <h1>Steven</h1>
          <p>Steven har redigeret vores video til vores kampagne</p>
        </div>
      </div>
    </>
  );
}

export default omOs;
