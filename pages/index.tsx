import Image from "next/image";
import React, { useState } from "react";
import Brev from "../components/Brev";
import News from "../components/News";
import Støts from "../components/Støts";
import Hero from "../public/img/abe.png";
import Monke from "../public/img/lilleabe.png";

import { Prisma, PrismaClient, contacts } from "@prisma/client";
//const prisma = new PrismaClient();

// export async function getServerSideProps() {
//   const contacts: contacts[] = await prisma.contacts.findMany();

//   return {
//     props: {
//       initialContact: contacts,
//     },
//   };
// }

export async function saveSignup(signup: Prisma.contactsCreateInput) {
  const respone = await fetch("/api/contacts", {
    method: "POST",
    body: JSON.stringify(signup),
  });

  if (!respone.ok) {
    throw new Error(respone.statusText);
  }
  return await respone.json();
}

function index({ initialContact }) {
  const [contact, setContact] = useState<contacts[]>(initialContact);

  return (
    <div>
      <div className="relative w-screen h-96 lg:h-screen text-white">
        <Image src={Hero} layout="fill" />
        <h1 className="text-5xl lg:text-9xl md:left-1/4 text-fill absolute py-20 lg:py-40 left-[20vw] lg:left-1/3">
          Red En Abe
        </h1>
        <button className="text-6xl absolute outline top-1/2 lg:top-2/3 left-[25vw] lg:left-[44vw]">
          Støt her
        </button>
      </div>

      <News />
      <Brev
        onSubmit={async (data, e) => {
          try {
            await saveSignup(data);
            setContact([...contact, data]);
            e.target.reset();
          } catch (error) {
            console.log(error);
          }
        }}
      />

      <div className="relative w-screen h-[50vh] lg:w-full lg:h-screen">
        <Image src={Monke} layout="fill" />
      </div>

      <Støts />
    </div>
  );
}

export default index;
