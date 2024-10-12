'use client'
import { useState } from "react"

export default function BinaryTree () {
    const [binaryCard, setBinary] = useState('short');
    if (binaryCard == 'short') {
        return (
            <div id='binaryCard' className="space-y-5 bg-white p-5 border-4 border-green-400 rounded-lg">
                <h1 className="text-2xl">Binary Tree Sort</h1>
                <p>Comparison, justification, and implementation of<br />a binary tree data structure (C++)</p>
                <img className='focus:ring hover:shadow-lg' width='20' src="/arrow.png" onClick={() => setBinary('long')} />
            </div>
        )
    } else if (binaryCard == 'long') {
        return (
            <div id='binaryCard' className="p-5 space-y-5 bg-white p-5 border-4 border-green-400 rounded-lg">
            <h1 className="text-2xl">Binary Tree Sort</h1>
            <p>Comparison, justification, and implementation of<br />a binary tree data structure (C++)</p>
            <p>Success</p>
            <img className=' rotate-180 focus:ring hover:shadow-lg' width='20' src="/arrow.png" onClick={() => setBinary('short')} />
        </div>

        )
    }

}