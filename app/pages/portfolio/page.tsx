'use client'
import Link from "next/link";
import TravelerComponent from "@/app/travelerComponent/page";
import BinaryTree from "@/app/binaryComponent/page";
export default function Portfolio() {
    'use client'
    return (
        <div>
            <h1 className="text-6xl p-10 font-bold">Portfolio</h1>
            <div className="space-y-5 p-5">
                <h2 className=" m-10 text-2xl">Below are current projects I have enhanced in my BSCS program or feel strongly example skills in industry specific tasks.<br/><br/>
                    Further examples in various technologies can be located on my Github. I am also open to collabortation on these items as well. Please reach out to me regarding these offers/opportunities</h2>
                <TravelerComponent />
                <BinaryTree />
                <div className=" space-x-2 flex justify-center">
                    <Link target='_blank' href='https://github.com/Konado22'><button className="flex p-2 bg-slate-300 border-2 border-black rounded hover:font-bold"><img src="/github.png" height='20' width='20'/>  Additional projects  <img src="/github.png" height='20' width='20'/> </button></Link>
                </div>
            </div>
            <div className='mr-20'>
                <div>
                </div>
            </div>
        </div>
    )
}