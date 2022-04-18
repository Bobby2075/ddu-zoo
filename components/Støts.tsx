import Link from "next/link";
import React from "react";

function Støts() {
  return (
    <div className="bg-yellow-400 py-10">
      <h1 className="text-center text-6xl text-white">Gør en forskel for alle</h1>

      <div className="flex justify-center gap-32 pt-20 text-3xl">
        <div className="bg-white w-48 h-16 text-center flex justify-center">
          <Link href="#">
            <a className="self-center">Støt fast</a>
          </Link>
        </div>
        <div className="bg-transparent border-2 w-[442px] h-16 text-center flex justify-center">
          <Link href="#">
            <a className="self-center text-white">Støt med enekelt donation</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Støts;
