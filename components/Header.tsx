import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/img/logo.png";

function Header() {
  return (
    <div className="mx-36 my-3 flex items-center">
      <div className="relative h-20 w-16">
        <Image src={logo} layout="fill" />
      </div>

      <h1 className="text-4xl ml-9 text-yellow-400">Animal Treasury</h1>

      <div className="ml-auto text-4xl space-x-14">
        <Link href="#">
          <a>Dyrene</a>
        </Link>
        <Link href="#">
          <a>Nyheder</a>
        </Link>
        <Link href="#">
          <a className="border-b-4 border-yellow-300">Støt Kampen</a>
        </Link>
        <Link href="#">
          <a>Om os</a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
