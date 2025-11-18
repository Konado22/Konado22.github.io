import Link from "next/link";

export default function Navbar() {
  return (
      <div className="p-10 flex-row fixed space-x-10 font-bold text-xl top-0 z-1 bg-slate-500 w-full">
        <Link href='/aboutMe' className=" hover:text-2xl">About Me</Link>
        <Link href='/projects' className=" hover:text-2xl">Projects</Link>
        <Link href='/contact' className=" hover:text-2xl" >Contact</Link>
        <Link href='/'>Back Home</Link>
      </div>
  );
}
