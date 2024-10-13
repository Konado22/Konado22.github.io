'use client'
import Link from "next/link";
import TravelerComponent from "@/app/travelerComponent/page";
import BinaryTree from "@/app/binaryComponent/page";
export default function Portfolio() {
    'use client'
    return (
        <div>
            <div className=" bg-green-400 border-b-8 border-green-400">
                    <h1 className="text-6xl p-10">Portfolio</h1>
                </div>
            <div className="space-y-5 p-5">
                
                <h2 className=" m-10 text-2xl">Below are current projects I have enhanced in my BSCS program<br />
                    Further examples in various technologies can be located on my Github</h2>
                <TravelerComponent />
                <BinaryTree />
                <div className="flex justify-center">
                    <Link target='_blank' href='https://github.com/Konado22'><button className="flex p-2 bg-white border-2 border-green-400 rounded hover:font-bold"><img src="/github.png" />  Additional projects  <img src="/github.png" /> </button></Link>
                </div>
            </div>
            <div className='mr-20'>
                <div>
                </div>
            </div>
        </div>
    )
}