import Link from "next/link";
import Navbar from "../navbar/navbar";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="mt-10 pt-20">
        <h1 className="flex justify-center p-10 text-4xl font-bold">
          Projects
        </h1>
        <div className="p-10 grid grid-cols-2 text-2xl leading-loose">
          <div className="p-10">
            <h1 className="flex font-bold justify-center">Pokedex</h1>
            <p className="flex justify-center">A NextJS application using API fetching and state</p>
            <p className="flex justify-center">Link to repo</p>
          </div>
          <div className="p-10">
            <h1 className="flex font-bold justify-center">
              Animal Center Database
            </h1>
            <p className="flex justify-center">A Dash project using Python to help with animal adoption</p>
            <p className="flex justify-center">Link to repo</p>
          </div>
          <div className="p-10">
            <h1 className="flex font-bold justify-center">
              Pirate Treasure game
            </h1>
            <p className="flex justify-center">
              A Keras AI program that uses neural networks to teach the program
              to solve a maze
            </p>
            <p className="flex justify-center">Link to repo</p>
          </div>
          <div className="p-10">
            <h1 className="flex font-bold justify-center">Traveler</h1>
            <p className="flex justify-center">
              A Fullstack NextJS application using Postgres to manage vacations
            </p>
            <p className="flex justify-center">Link to repo</p>
          </div>
        </div>
        <div className="text-2xl leading-loose">
          <h1 className="flex justify-center font-bold">
            Future projects in progress
          </h1>
          <Link
            href="https://github.com/Konado22"
            className="flex justify-center text-blue-600"
          >
            Click Here
          </Link>
        </div>
      </div>
    </>
  );
}
