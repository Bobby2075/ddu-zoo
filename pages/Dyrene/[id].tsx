import { animals, PrismaClient } from "@prisma/client";
import React from "react";

export async function getStaticPaths() {
  const Prisma = new PrismaClient();
  const animals: animals[] = await Prisma.animals.findMany();

  return {
    paths: animals.map((animals) => ({
      params: {
        id: animals.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const animal = await prisma.animals.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return {
    props: {
      animal,
    },
  };
}

function findStatus(status: number) {
  if (status === 1) {
    return "Ikke truet";
  } else if (status === 0) {
    return "Truet";
  } else {
    return "oh oh stinky";
  }
}

function Details({ animal: animals }) {
  return (
    <>
      <div className="flex  items-center mx-20 mb-5 justify-between">
        <div className="mt-3">
          <img src={animals.billed} alt="" />
        </div>
        <h1 className="text-2xl">{animals.animal}</h1>
        <p>Status: {findStatus(animals.status)}</p>
        <p>Lokation: {animals.location}</p>
      </div>
      <h1 className="text-4xl text-center font-display">Info</h1>
      <div className=" mx-32 flex justify-center mb-10">
        <p className="text-center mt-2">{animals.info}</p>
      </div>
    </>
  );
}

export default Details;
