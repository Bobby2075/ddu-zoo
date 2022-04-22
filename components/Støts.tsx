import Link from "next/link";
import React from "react";

function Støts() {
  return (
    <>
      <div className="bg-yellow-400 text-black flex flex-col items-center gap-5 py-5 lg:hidden">
        <h1 className="text-2xl font-bold text-white">
          Hver med til at gøre en forskel
        </h1>
        <button className="bg-white text-center w-36 h-10 font-bold text-lg outline outline-white">
          <a href="https://wwf.dk/kaemp-med-os/stoet-fast/">Støt fast</a>
        </button>
        <button className="bg-transparent outline outline-white text-center text-white w-36 h-10 font-bold text-lg">
          <a href="https://wwf.dk/stoet-med-enkeltdonation/">Enkel donation</a>
        </button>
      </div>

      <div className="bg-yellow-400 py-10 hidden lg:block">
        <h1 className="text-center text-6xl text-white">
          Gør en forskel for alle
        </h1>

        <div className="flex justify-center gap-32 pt-20 text-3xl">
          <div className="bg-white w-48 h-16 text-center flex justify-center">
            <Link href="#">
              <a className="self-center">Støt fast</a>
            </Link>
          </div>
          <div className="bg-transparent border-2 w-[442px] h-16 text-center flex justify-center">
            <Link href="#">
              <a className="self-center text-white">
                Støt med enekelt donation
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Støts;
