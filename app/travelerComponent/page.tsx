"use client"
import { useState} from "react";

export default function TravelerComponent () {
    'use client'
    const [travelerCard, setTraveler] = useState('short');
    if (travelerCard == 'short') {
        return (
            <div id='traveler' className="space-y-5 bg-white p-5 border-4 border-green-400 rounded-lg">
                <h1 className="text-2xl">Traveler</h1>
                <p>A Fullstack NextJS application utilizing Vercel Postgres</p>
                <img className='focus:ring-2' width='20' src="/arrow.png" onClick={() => setTraveler('long')} />
            </div>
        )
    } else if (travelerCard == 'long') {
        return (
            <div id='traveler' className="space-y-5 bg-white p-5 border-4 border-green-400 rounded-lg">
                <h1 className="text-2xl">Traveler</h1>
                <p>A Fullstack NextJS application utilizing Vercel Postgres</p>
                <p>extended card success</p>
                <img className=' rotate-180 focus:ring-2' width='20' src="/arrow.png" onClick={() => setTraveler('short')} />

            </div>
        )
    }

}