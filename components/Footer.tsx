import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import logo from "../public/img/logo-hvid.png";

function Footer() {
  return (
    <>
      <div className="bg-black text-white font-display ">
        <div className="mx-16 pt-6">
          <div className=" flex justify-between border-b-2 pb-36 text-2xl">
            <ul>
              <h1 className="text-4xl mb-5">Hjælp dyr</h1>
              <li>Doner fast</li>
              <li>Doner enkelt</li>
              <li>WFF</li>
            </ul>

            <ul>
              <h1 className="text-4xl mb-5">Om Animal Treasury</h1>
              <li>Om os</li>
              <li>Nyheder</li>
              <li>Dyrene</li>
            </ul>

            <ul>
              <h1 className="text-4xl mb-5">Mere info</h1>
              <li>WFF</li>
              <li>Giveskud Zoo</li>
              <li>IUCN-Red List</li>
            </ul>
          </div>

          <div className=" flex items-center py-10">
            <div className="relative w-44 h-52">
              <Image src={logo} layout="fill" />
            </div>
            <h1 className="ml-9 text-4xl">Aniamal Treasury</h1>
            <div className=" flex ml-auto text-4xl gap-8">
              <BsInstagram />
              <FaYoutubeSquare />
              <FaTwitterSquare />
              <BsFacebook />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
