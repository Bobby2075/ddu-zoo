import { animals, PrismaClient } from "@prisma/client";
import Link from "next/link";
import React from "react";
import AnimalCard from "../../components/AnimalCard";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const animals: animals[] = await prisma.animals.findMany();

  //const res = await fetch('http://localhost:3000/api/animal')
  //const data = await res.json();

  console.log("test");
  return {
    props: { Initialanimal: animals },
  };
}

// export const getStaticProps = async () => {
//   const res = await fetch('http://localhost:3000/api/animal');
//   const data = await res.json();

//   return {
//     props: {Initialanimal: data}
//   }
// }

function index({ Initialanimal }) {
  //   const [animal, setAnimal] = useState<animals[]>(Initialanimal);
  const animal: animals[] = Initialanimal;
  return (
    <div className="py-5">
      <h1 className="text-center text-2xl">Lær noget om de truede dyr</h1>
      <div className="flex flex-col items-center justify-center md:grid grid-cols-3 mx-28 justify-items-center">
        {animal.map((animal) => (
          <Link href={"/Dyrene/" + animal.id} key={animal.id}>
            <a>
              <AnimalCard animal={animal} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default index;
