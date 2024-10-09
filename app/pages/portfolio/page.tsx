'use client'

//import { useState } from "react"

export default function Portfolio() {
    'use client'
    //const [travelerCard,setTraveler] = useState('short');
    //const [binaryCard,setBinary] = useState('short');

    return (
        <div className="grid grid-flow-col">
            <div className="space-y-5 pl-10 pt-10">
                <h1 className="text-8xl">Portfolio</h1>
                <h2 className="text-4xl">Below are current examples of my work<br />
                    To access further examples of work please check out my Github!</h2>
                <div id='traveler' className="space-y-5 bg-white p-5 border-4 border-green-400 rounded-lg">
                    <h1 className="text-2xl">Traveler</h1>
                    <p>A Fullstack NextJS application utilizing Vercel Postgres</p>
                    <img width='20'src="/arrow.png" />
                </div>

                <div id='traveler' className="space-y-5 bg-white p-5 border-4 border-green-400 rounded-lg">
                    <h1 className="text-2xl">Binary Tree Sort</h1>
                    <p>Comparison of Data Structures <br/>Justification of Data Structure for Assignment</p>
                    <img width='20' src="/arrow.png" />
                </div>
                <div className="flex justify-center">
                    <button className="flex p-2 bg-white border-2 border-green-400 rounded"><img src="/github.png"/>  Additional projects  <img src="/github.png"/> </button>
                </div>
            </div>
            <div className='mr-20'>
                <div>

                </div>
            </div>
        </div>

    )
}