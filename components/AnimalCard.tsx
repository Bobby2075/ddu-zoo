import { animals } from "@prisma/client";
import React from "react";

interface AnimalCardProps {
  animal: animals;
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

function AnimalCard(props: AnimalCardProps) {
  return (
    <div className="text-center bg-yellow-400 text-white text-2xl space-y-5 mt-5 pb-5">
      <div className="relative w-64 h-full">
        {/* <Image src={props.animal.billed} layout="fill" className="object-cover" /> */}
        <img src={props.animal.billed} className="object-fit" />
      </div>
      <h1>{props.animal.animal}</h1>
      <h1>{props.animal.location}</h1>
      <h1>{findStatus(props.animal.status)}</h1>
    </div>
  );
}

export default AnimalCard;
