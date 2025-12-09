import Link from "next/link";
import Navbar from "../navbar/navbar";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="mt-10 pt-20">
        <h1 className="flex justify-center p-10 text-4xl font-bold">
          Projects
        </h1>
        <div className="p-10 grid grid-cols-2 text-2xl leading-loose">
          <div className="p-10 m-10 bg-slate-500 rounded-lg border-4 border-slate-900">
            <h1 className="pb-10 flex font-bold justify-center text-white text-4xl">
              Pokedex
            </h1>
            <div className="p-10 flex justify-center">
              <Image
                height={"400"}
                width={"400"}
                src={"/pokemon.png"}
                alt="pokemon project"
              ></Image>
            </div>
            <p className="flex justify-center text-white">
              A NextJS application using API fetching and state
            </p>
            <Link
              href="https://github.com/Konado22/THEDEX"
              className="flex justify-center text-blue-600"
            >
              Link to repo
            </Link>
          </div>
          <div className="p-10 m-10 bg-slate-500 rounded-lg border-4 border-slate-700">
            <h1 className="pb-10 flex font-bold justify-center text-white text-4xl">
              Animal Center Database
            </h1>
            <div className="p-10 flex justify-center">
              <Image
                height={"400"}
                width={"400"}
                src={"/animalCenter.png"}
                alt="animal center database"
              ></Image>
            </div>
            <p className="flex justify-center text-white">
              A Dash project using Python to help with animal adoption
            </p>
            <Link
              href="https://github.com/Konado22/AnimalCenterDatabase"
              className="flex justify-center text-blue-400"
            >
              Link to repo
            </Link>
          </div>
          <div className="p-10 m-10 bg-slate-500 rounded-lg border-4 border-slate-900">
            <h1 className=" flex font-bold justify-center text-white text-4xl">
              Pirate Treasure game
            </h1>
            <div className="flex justify-center p-10">
              <Image
                height="400"
                width="400"
                src="/result.png"
                alt="results of script"
              ></Image>
            </div>
            <p className="flex justify-center text-white">
              A Keras AI program that uses neural networks to teach the program
              to solve a maze
            </p>
            <Link
              href="https://github.com/Konado22/PirateTreasureGame"
              className="flex justify-center text-blue-400"
            >
              Link to repo
            </Link>
          </div>
          <div className="p-10 m-10 bg-slate-500 rounded-lg border-4 border-slate-900">
            <h1 className="pb-10 flex font-bold justify-center text-white text-4xl">
              Pad Protection
            </h1>
            <div className="flex justify-center p-10">
              <Image
                height="400"
                width="400"
                src="/padProtection.png"
                alt="pad protection app"
              ></Image>
            </div>

            <p className="flex justify-center text-white">
              Asset management solution
            </p>
            <Link
              href="https://github.com/Konado22/Pad-Protection"
              className="flex justify-center text-blue-400"
            >
              Link to repo
            </Link>
          </div>
        </div>
        <div className="m-10 p-10 text-2xl leading-loose">
          <h1 className="flex justify-center font-bold">
            Future projects in progress
          </h1>
          <Link
            href="https://github.com/Konado22"
            className="flex justify-center text-blue-400"
          >
            Click Here
          </Link>
        </div>
      </div>
    </>
  );
}
