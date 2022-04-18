import { animals, PrismaClient } from "@prisma/client";
import React, { useState } from "react";
import AnimalCard from "../../components/AnimalCard";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const animals: animals[] = await prisma.animals.findMany();

  return {
    props: { Initialanimal: animals },
  };
}

function index({ Initialanimal }) {
  const [animal, setAnimal] = useState<animals[]>(Initialanimal);
  return (
    <div>
      <div className="grid grid-cols-3 mx-28 justify-items-center">
        {animal.map((animal) => (
          <div key={animal.id}>
            <AnimalCard animal={animal} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
