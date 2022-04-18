import Image from "next/image";
import React from "react";
import Nyhed from "../public/img/nyhed_del.png";

function News() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <Image src={Nyhed} layout="fill" />
        <h1 className="text-yellow-400 text-6xl absolute top-[13vh] left-[43vw]">Nyheder</h1>
        <h1 className="text-yellow-400 text-6xl absolute top-[54vh] left-[22vw]">I Dag</h1>
        <h1 className="text-yellow-400 text-6xl absolute top-[54vh] left-[64vw]">Sidste Uge</h1>
      </div>
    </div>
  );
}

export default News;
