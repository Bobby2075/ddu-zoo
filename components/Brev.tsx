import Image from "next/image";
import React from "react";
import Horse from "../public/img/heste.png";

function Brev() {
  const RegisterUser = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="mx-16 flex flex-row py-10">
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold">
          Tilmed dig til <br /> Vores nyhedsbrev
        </h1>
        <form onSubmit={RegisterUser} className="flex flex-col gap-5 mt-4">
          <input id="name" type="text" autoComplete="name" placeholder="Indtast dit fulde navn" required className="outline w-40" />
          <input type="email" name="email" id="email" placeholder="indtast din e-mail" className="outline w-40" />
          <div className="w-48 h-10 text-center align-middle bg-yellow-400 text-white">
            <button type="submit">Tilmeld</button>
          </div>
        </form>
      </div>

      <div className="relative w-[796px] h-80 float-right ml-auto">
        <Image src={Horse} layout="fill" />
      </div>
    </div>
  );
}

export default Brev;
