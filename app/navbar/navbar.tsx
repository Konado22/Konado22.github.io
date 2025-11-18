import Link from "next/link";
//reusable navbar component
export default function Navbar() {
  return (
      <div className="p-10 flex-row fixed space-x-10 font-bold text-xl top-0 z-1 bg-slate-500 w-full">
        <Link href='/aboutMe' className="">About Me</Link>
        <Link href='/projects' className="">Projects</Link>
        <Link href='/contact' className="" >Contact</Link>
        <Link href='/'>Back Home</Link>
      </div>
  )
};