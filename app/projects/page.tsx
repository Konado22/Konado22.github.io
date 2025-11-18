import Navbar from "../navbar/navbar";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="mt-10 pt-20">
        <h1 className="p-10 flex justify-center text-4xl">Projects</h1>
        <div className="p-10 grid grid-cols-2 text-2xl justify-items-center leading-loose">
            <h1>Pokedex</h1>
            <h1>Animal Center Database</h1>
            <h1>Pirate Treasure game</h1>
            <h1>Traveler</h1>
        </div>
      </div>
    </>
  );
}