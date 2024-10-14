import Image from "next/image";

export default function ContactMe() {

    return (
        <div className=" size-full h-min-max space-y-10 pt-10 p-10">
            <div className="space-y-10">
                <h1 className="text-6xl">Contact Me</h1>
                <h1 className="text-2xl">Thank you for taking the time to view my Portfolio and my accomplishments</h1>
                <h1 className="text-2xl">For any inqueries about business or project opportunities, or ways I can support your team today please reach out to me through any of the resources below.</h1>
                <div className="flex-col space-y-10">
                    <h1 className="text-2xl">Below I have also provided additional resouces such as my downloadable cover letter as well as updated resume</h1>
                    <button className="border-4 rounded border-green-400 hover:shadow-2xl border-spacing-3 p-5">Link to Cover Letter</button><br/>
                    <button className="border-4 rounded border-green-400 hover:shadow-2xl border-spacing-3 p-5"> Link to Resume</button>
                </div>
            </div>
            <div className="flex flex-row justify-evenly">
                <Image className='hover:shadow-xl border-4 rounded border-green-400 bg-white' alt="LinkedIn" src='/linkedin.png' height='80' width='40' />
                <Image className='hover:shadow-xl border-4 rounded border-green-400 bg-white' alt="github" src='/github.png' height='80' width='40' />
                <Image className='hover shadow-xl border-4 rounded border-green-400 bg-white' alt='email' src='/gmail.png' height='80' width='40' />
            </div>

        </div>
    )
}