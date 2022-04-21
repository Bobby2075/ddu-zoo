import Link from "next/link";
import React from "react";

function MobileNav({ mobile, handlemobile }) {
  return (
    <>
      {mobile && (
        <div className="bg-black text-white w-screen h-screen">
          <div className="flex flex-col items-center gap-28">
            <Link href="/">
              <a
                className="mobile"
                onClick={() => {
                  handlemobile();
                }}
              >
                Home
              </a>
            </Link>
            <Link href="/Dyrene">
              <a
                className="mobile"
                onClick={() => {
                  handlemobile();
                }}
              >
                Dyrene
              </a>
            </Link>
            <Link href="/News">
              <a
                className="mobile"
                onClick={() => {
                  handlemobile();
                }}
              >
                News
              </a>
            </Link>
            <Link href="/">
              <a
                className="mobile"
                onClick={() => {
                  handlemobile();
                }}
              >
                Om Os
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileNav;
