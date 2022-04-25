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

function Details({ animal: animals }) {
  return (
    <>
      <div>
        <h1>Test</h1>
        <img src={animals.billed} alt="" />
        <h1>{animals.id}</h1>
        <h1>{animals.animal}</h1>
        <h1>{animals.info}</h1>
        <h1></h1>
      </div>
    </>
  );
}

export default Details;
