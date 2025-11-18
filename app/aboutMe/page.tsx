import Navbar from "../navbar/navbar";

export default function AboutMe() {
  return (
    <>
      <Navbar />
      <div className="flex-col mt-10 pt-20">
        <h1 className="flex justify-center text-4xl">Welcome to my Website</h1>
        <div>
          <h2 className="flex justify-center text-4xl">My name is Jesse</h2>
        </div>
      </div>
    </>
  );
}
