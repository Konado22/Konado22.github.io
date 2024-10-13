"use client"
import { useState} from "react";

export default function TravelerComponent () {
    'use client'
    const [travelerCard, setTraveler] = useState('short');
    if (travelerCard == 'short') {
        return (
            <div id='traveler' className="space-y-5 bg-white p-5 border-4 border-green-400 rounded-lg">
                <h1 className="font-bold text-2xl">Traveler</h1>
                <p>A Fullstack NextJS application utilizing Vercel Postgres</p>
                <img className='focus:ring-2' width='20' src="/arrow.png" onClick={() => setTraveler('long')} />
            </div>
        )
    } else if (travelerCard == 'long') {
        return (
            <div id='traveler' className="space-y-5 bg-white p-5 border-4 border-green-400 rounded-lg">
                <h1 className="font-bold text-2xl">Traveler</h1>
                <p>A Fullstack NextJS application utilizing Vercel Postgres</p>
                <p>extended card success</p>
                <h2 className="font-bold">Description</h2>
                <p>This application is a full-stack application that utilizes NextJS for the framework and serverless technology. Node and Postgres by Vercel 
                    are respectively the package manager and backend database for the application
                </p>
                <h2 className="font-bold">Goals</h2>
                <p>This assignment was originally designed to transform a traditional webpage into a single-page applicaton. The 
                    final result of this project was a SPA featuring a MEAN stack (Mongo,Express,Angular,Node). Howver I wanted to test and prove my skills 
                    by implementing a new technology that provides speeds and security measures that greatly outperform traditional 
                    webpage designs and other frameworks. To see modifications and results of the enhancements to this application
                    please click the button below.
                </p>
                <img className=' rotate-180 focus:ring-2' width='20' src="/arrow.png" onClick={() => setTraveler('short')} />

            </div>
        )
    }

}