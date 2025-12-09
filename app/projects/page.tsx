import Link from "next/link";
import Navbar from "../navbar/navbar";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="mt-10 pt-20 flex flex-col">
        <h1 className="p-10 text-4xl font-bold">
          Projects
        </h1>
        <div className="p-10 grid grid-cols-2 text-2xl leading-loose">
          <div className="bg-slate-200 flex-col">
            <h1 className="font-bold p-10">Pokedex</h1>
            <p>A NextJS application using API fetching and state</p>
            <p >Link to repo</p>
          </div>
          <div className="bg-slate-200 flex-col">
            <h1 className="font-bold p-10">
              Animal Center Database
            </h1>
            <p>A Dash project using Python to help with animal adoption</p>
            <p>Link to repo</p>
          </div>
          <div className="bg-slate-200 flex-col">
            <h1 className="font-bold p-10">
              Pirate Treasure game
            </h1>
            <p>
              A Keras AI program that uses neural networks to teach the program
              to solve a maze
            </p>
            <p>Link to repo</p>
          </div>
          <div className="bg-slate-200 flex-col">
            <h1 className="font-bold p-10">Traveler</h1>
            <p>
              A Fullstack NextJS application using Postgres to manage vacations
            </p>
            <p>Link to repo</p>
          </div>
        </div>
        <div className="flex-col leading-loose text-2xl">
          <h1 className="flex justify-center font-bold">
            Future projects in progress
          </h1>
          <Link
            href="https://github.com/Konado22?"
            className="flex justify-center text-blue-600"
          >
            Click Here
          </Link>
        </div>
      </div>
    </>
  );
}
