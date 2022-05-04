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
      <div className="flex flex-col items-center mx-20 mb-5">
        <p>Lokation: {animals.location}</p>
        <p>Status: {findStatus(animals.status)}</p>
        <h1 className="text-2xl">{animals.animal}</h1>
        <div className="mt-3">
          <img src={animals.billed} alt="" />
        </div>
        <p className="text-center mt-2">{animals.info}</p>
      </div>
    </>
  );
}

export default Details;
