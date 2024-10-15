"use client"
import { useState} from "react";

export default function TravelerComponent () {
    'use client'
    const [travelerCard, setTraveler] = useState('short');
    if (travelerCard == 'short') {
        return (
            <div id='traveler' className="space-y-5 bg-slate-300 p-5 border-4 border-black rounded-lg">
                <h1 className="font-bold text-2xl">Traveler</h1>
                <p>A Fullstack NextJS application utilizing Vercel Postgres. A platform for browsing vacations as well as CRUD operations to manage available trips within the database</p>
                <img className='focus:ring-2' width='20' src="/arrow.png" onClick={() => setTraveler('long')} />
            </div>
        )
    } else if (travelerCard == "long") {
        return (
            <div id='traveler' className="space-y-5 bg-slate-300 p-5 border-4 border-black rounded-lg">
                <h1 className="font-bold text-2xl">Traveler</h1>
                <p>A Fullstack NextJS application utilizing Vercel Postgres. A platform for browsing vacations as well as CRUD operations to manage available trips within the database</p>
                <h2 className="font-bold">Description</h2>
                <p>This application is a full-stack application that utilizes NextJS for the framework and serverless technology. Node and Postgres by Vercel 
                    are respectively the package manager and backend database for the application. The orginal artifact was a traditional webpage with varying 
                    html pages for rendering different routes. By implementing NextJS speeds and functionality are improved due to the loading of all pages at once and the usage of various
                    components to minimize excessive compilling of components that are common on all pages.
                </p>
                <h2 className="font-bold">Goals</h2>
                <p>This assignment was originally designed to transform a traditional webpage into a single-page applicaton. The 
                    final result of this project was a SPA featuring a MEAN stack (Mongo,Express,Angular,Node). However I wanted to test and prove my skills 
                    by implementing a new technology that provides speeds and security measures that greatly outperform traditional 
                    webpage designs and other frameworks. Please Click the buttons below to view respectively the original artifact`s repository and the enhanced artifact`s repository
                </p>
                <div className="flex flex-col space-y-10">
                    <button className="border-black">Original Artifact</button>
                    <button>Enhanced Artifact</button>
                </div>
                <img className="rotate-180 focus:ring-2" width="20" src="/arrow.png" onClick={() => setTraveler('short')} />

            </div>
        )
    }

}