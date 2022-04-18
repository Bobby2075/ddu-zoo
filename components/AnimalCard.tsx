import { animals } from "@prisma/client";
import Image from "next/image";
import React from "react";
import Monke from "../public/img/abe.png";

interface AnimalCardProps {
  animal: animals;
}

function findStatus(status: number) {
  if (status === 1) {
    return "Fine";
  } else if (status === 0) {
    return "endangered";
  } else {
    return "oh oh stinky";
  }
}

function AnimalCard(props: AnimalCardProps) {
  return (
    <div className="text-center bg-yellow-400 text-white text-2xl space-y-5 mt-5">
      <div className="relative w-64 h-64">
        <Image src={Monke} layout="fill" />
      </div>
      <h1>{props.animal.animal}</h1>
      <h1>{props.animal.location}</h1>
      <h1>{findStatus(props.animal.status)}</h1>
    </div>
  );
}

export default AnimalCard;
