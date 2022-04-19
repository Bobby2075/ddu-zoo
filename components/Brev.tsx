import Image from "next/image";
import React from "react";
import Horse from "../public/img/heste.png";

function Brev() {
  return (
    <div className="mx-16 flex flex-row py-10">
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold">
          Tilmed dig til <br /> Vores nyhedsbrev
        </h1>
        <form action="/api/form" method="post" className="flex flex-col gap-5 mt-4">
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Indtast dit fulde navn" required className="outline w-40" />

          <input type="email" name="mail" id="mail" placeholder="indtast din e-mail" className="outline w-40" />

          <button type="submit" className="w-48 h-10 text-center align-middle bg-yellow-400 text-white">
            <h1 className="text-2xl font-bold">Tilmeld</h1>
          </button>
        </form>
      </div>

      <div className="relative w-[796px] h-80 float-right ml-auto">
        <Image src={Horse} layout="fill" />
      </div>
    </div>
  );
}

export default Brev;
