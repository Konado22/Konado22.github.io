import Image from "next/image";

export default function ContactMe() {

    return (
        <div className="space-y-10 pt-10 p-10">
            <div className="">
                <h1 className="text-2xl">Thank you for taking the time to view my Portfolio and my accomplishments</h1>
                <h1 className="text-2xl">For any inqueries or ways I can support your team or project feel free to reach out to me through various platforms</h1>
                <div className="grid-">
                    <h1 className="text-2xl">Below I have also provided additional resouces such as my downloadable cover letter as well as updated resume</h1>
                    <button className="border-4 rounded border-green-400 hover:shadow-2xl border-spacing-3">Cover Letter</button>
                    <button className="border-4 rounded border-green-400 hover:shadow-2xl border-spacing-3">Resume</button>
                </div>
            </div>
            <div className="flex flex-row justify-evenly">
                <Image className='hover:shadow-xl border-4 rounded border-green-400 bg-white' alt="LinkedIn" src='/linkedin.png' height='80' width='40'/>
                <Image className='hover:shadow-xl border-4 rounded border-green-400 bg-white' alt="github" src='/github.png' height='80' width='40' />
                <Image className='hover shadow-xl border-4 rounded border-green-400 bg-white' alt='email' src='/gmail.png' height='80' width='40' />
            </div>

        </div>
    )
}