import React from "react";

function Støts() {
  return (
    <div className="bg-yellow-400 py-10">
      <h1 className="text-center text-6xl text-white">Gør en forskel for alle</h1>

      <div className="flex justify-center gap-32 pt-20 text-3xl">
        <button className="bg-white w-48 h-16 text-center flex justify-center hover:bg-black hover:text-white transition-color">
          <a href="https://wwf.dk/kaemp-med-os/stoet-fast/" target="_blank" className="self-center">
            Støt fast
          </a>
        </button>
        <button className="bg-transparent border-2 w-[442px] h-16 text-center flex justify-center hover:bg-white hover:text-black transition-colors">
          <a href="https://wwf.dk/stoet-med-enkeltdonation/" target="_blank" className="self-center text-white">
            Støt med enekelt donation
          </a>
        </button>
      </div>
    </div>
  );
}

export default Støts;
