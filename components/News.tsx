import Image from "next/image";
import React from "react";
import Elefant from "../public/img/elefant.png";
import Nyhed from "../public/img/nyhed_del.png";
import Panda from "../public/img/panda.png";

function News() {
  return (
    <div>
      <div className="relative w-full h-screen hidden lg:block">
        <Image src={Nyhed} layout="fill" />
        <h1 className="text-yellow-400 text-6xl absolute top-[13vh] left-[43vw]">Nyheder</h1>
        <h1 className="text-yellow-400 text-6xl absolute top-[54vh] left-[22vw]">I Dag</h1>
        <h1 className="text-yellow-400 text-6xl absolute top-[54vh] left-[64vw]">Sidste Uge</h1>
      </div>

      <div className="py-5 bg-black lg:hidden">
        <h1 className="text-center text-4xl font-bold text-yellow-400">Nyheder</h1>
      </div>
      <div className="flex lg:hidden">
        <div className="relative w-[50vw] h-[50vh]">
          <Image src={Panda} layout="fill" className="object-cover" />
          <h1 className="absolute left-1/3 top-1/4 text-3xl font-bold text-yellow-400">I dag</h1>
        </div>
        <div className="relative w-[50vw] h-[50vh]">
          <Image src={Elefant} layout="fill" className="object-cover" />
          <h1 className="absolute left-1/3 top-1/4 text-3xl font-bold text-yellow-400">I dag</h1>
        </div>
      </div>
    </div>
  );
}

export default News;
