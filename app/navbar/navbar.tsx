import Link from "next/link";
//reusable navbar component
export default function Navbar() {
  return (
      <div className="p-10 flex-row fixed space-x-10 font-bold text-xl top-0 z-1 bg-slate-500 w-full">
        <Link href='/aboutMe' className=" hover:font-extrabold">About Me</Link>
        <Link href='/projects' className="hover:font-extrabold">Projects</Link>
        <Link href='/contact' className="hover:font-extrabold" >Contact</Link>
        <Link href='/' className="hover:font-extrabold">Back Home</Link>
      </div>
  )
};