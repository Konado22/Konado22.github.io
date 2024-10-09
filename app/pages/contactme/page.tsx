import Image from "next/image";

export default function ContactMe () {
    
    return (
        <div className="space-y-10 pt-10 pl-10">
            <div className="">
                <h1 className="text-2xl">For any inqueries or ways I can support your team or project feel free to reach out to me through various platforms</h1>
            </div>
            <div className="flex flex-row justify-evenly">
                <Image  className='border-2 rounded border-green-400 bg-white' alt="LinkedIn" src='/linkedin.png' height='40' width='40'/>
                <Image className='border-2 rounded border-green-400 bg-white' alt="github" src='/github.png' height='40' width='40' />
                <Image className='border-2 rounded border-green-400 bg-white' alt='email' src='/gmail.png' height='40' width='40' />
            </div>
        </div>
    )
}