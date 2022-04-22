import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import Horse from "../public/img/heste.png";

const FormError = ({ errorMessage }) => {
  return <p>{errorMessage}</p>;
};

interface AddContactFormProps {
  onSubmit: any;
}

function Brev(props: AddContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="py-5 lg:hidden">
        <h1 className=" text-center text-3xl font-bold">
          Tilmed dig vores <br />
          Nyhedsbrev
        </h1>
        <form
          onSubmit={handleSubmit(props.onSubmit)}
          className="flex flex-col items-center space-y-5 pt-5"
        >
          <input
            type="navn"
            name="fullname"
            placeholder="Indtast dit fulde navn"
            {...register("fullname", {
              required: true,
            })}
            className="outline w-40"
          />
          {errors.fullname && (
            <FormError errorMessage="Full name is required" />
          )}
          <input
            type="email"
            name="email"
            placeholder="indtast din e-mail"
            {...register("email", {
              required: true,
            })}
            className="outline w-40"
          />
          {errors.email && <FormError errorMessage="Email is required" />}
          <button type="submit" className="w-48 h-10 bg-yellow-400 text-white">
            Tilmeld
          </button>
        </form>
      </div>

      <div className="hidden mx-16 lg:flex flex-row py-10">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold">
            Tilmed dig til <br /> Vores nyhedsbrev
          </h1>
          <form className="flex flex-col gap-5 mt-4">
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Indtast dit fulde navn"
              required
              className="outline w-40"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="indtast din e-mail"
              className="outline w-40"
            />
            <button
              type="submit"
              className="w-48 h-10 bg-yellow-400 text-white"
            >
              Tilmeld
            </button>
          </form>
        </div>

        <div className="relative w-[796px] h-80 float-right ml-auto">
          <Image src={Horse} layout="fill" />
        </div>
      </div>
    </>
  );
}

export default Brev;
