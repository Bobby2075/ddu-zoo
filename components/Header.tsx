import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../public/img/logo.png";
import MobileNav from "./MobileNav";

function Header() {
  const [mobile, setMobile] = useState(false);

  function showMobile() {
    setMobile(!mobile);
  }

  return (
    <div className=" lg:mx-36 my-3 flex items-center text-3xl 2xl:text-4xl font-display">
      <div className="relative h-20 w-16">
        <Image src={logo} layout="fill" />
      </div>

      <Link href="/">
        <a>
          <h1 className="ml-2 text-yellow-400">Animal Treasury</h1>
        </a>
      </Link>

      <FiMenu
        className=" md:hidden ml-auto"
        role="button"
        onClick={() => {
          showMobile();
        }}
      />
      <div className="ml-auto  space-x-14 hidden md:block">
        <Link href="/Dyrene">
          <a>Dyrene</a>
        </Link>
        <Link href="/News">
          <a>Nyheder</a>
        </Link>
        <Link href="#">
          <a className="border-b-4 border-yellow-300">Støt Kampen</a>
        </Link>
        <Link href="/omOs">
          <a>Om os</a>
        </Link>
      </div>
      <MobileNav mobile={mobile} handlemobile={showMobile} />
    </div>
  );
}

export default Header;
