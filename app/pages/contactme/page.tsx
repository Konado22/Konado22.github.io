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
                    <button className=" bg-slate-300 border-2 rounded border-black hover:shadow-2xl text-2xl hover:font-bold border-spacing-3 p-5">Link to Cover Letter</button><br/>
                    <button className="bg-slate-300 border-2 rounded border-black hover:shadow-2xl text-2xl hover:font-bold border-spacing-3 p-5"> Link to Resume</button>
                </div>
            </div>
            <div className="flex flex-row justify-evenly">
                <Image className='hover:shadow-xl border-3 rounded border-black bg-slate-300' alt="LinkedIn" src='/linkedin.png' height='70' width='70' />
                <Image className='hover:shadow-xl border-3 rounded border-black bg-slate-300' alt="github" src='/github.png' height='70' width='70' />
                <Image className='hover shadow-xl border-2 rounded border-black bg-slate-300' alt='email' src='/gmail.png' height='70' width='70' />
            </div>

        </div>
    )
}