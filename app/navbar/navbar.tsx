import Link from "next/link";

export default function Navbar() {
  return (
      <div className="p-10 flex flex-row fixed space-x-10 font-bold text-end text-2xl top-0 z-1 justify-evenly">
        <Link href='/aboutMe' className=" hover:text-4xl">About Me</Link>
        <Link href='/projects' className=" hover:text-4xl">Projects</Link>
        <Link href='/contact' className=" hover:text-4xl" >Contact</Link>
        <div className="flex justify-end">
            <Link href='/'>Back Home</Link>
        </div>
      </div>
  );
}
