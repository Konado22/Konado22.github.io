import Image from "next/image";
import Link from "next/link";

export default function ContactMe() {

    return (
        <div className=" size-full h-min-max space-y-10 pt-10 p-10">
            <div className="space-y-10">
                <h1 className="text-6xl font-bold">Contact Me</h1>
                <br/><br/>
                <h1 className="text-2xl">Thank you for taking the time to view my Portfolio and my accomplishments. I am proud of the progress I have made and look forward towards developing my skills and career.</h1>
                <h1 className="text-2xl">For any inqueries regarding project opportunities or ways I can support your team today please reach out to me through any of the resources below.</h1>
                <div className="flex flex-col p-10">
                    <h1 className="text-3xl">Below I have also provided additional resouces such as my downloadable cover letter as well as updated resume</h1><br/><br/>
                    <Link href={''} target="_blank"><button className="bg-slate-300 border-2 rounded border-black hover:shadow-2xl text-2xl hover:font-bold border-spacing-3 p-5">Link to Cover Letter</button></Link><br/>
                    <Link href={'https://docs.google.com/document/d/1-ixofLayRip4MJ5TJ3spMldObWDe2iyD0ghsbNvhKiw/edit?usp=sharing'} target="_blank"><button className="bg-slate-300 border-2 rounded border-black hover:shadow-2xl text-2xl hover:font-bold border-spacing-3 p-5"> Link to Resume</button></Link>
                </div>
            </div>
            <div className="flex flex-row justify-evenly">
                <Link href='https://www.linkedin.com/in/jesse-draper-2b5466217/' target='_blank'><Image className='hover:shadow-xl border-2 rounded border-black bg-slate-300' alt="LinkedIn" src='/linkedin.png' height='80' width='80' /></Link>
                <Link href='https://github.com/Konado22' target='_blank'><Image className='hover:shadow-xl border-2 rounded border-black bg-slate-300' alt="github" src='/github.png' height='80' width='80' /></Link>
                <Link href='mailto:jessedraper2@gmail.com' target='_blank'><Image className='hover shadow-xl border-2 rounded border-black bg-slate-300' alt='email' src='/gmail.png' height='80' width='80' /></Link>
            </div>

        </div>
    )
}