import Image from "next/image";
export default function Homepage() {

    return (
        <>
            <div className="space-y-20 flex flex-col p-10 mb-10">
                <br/>
                <h2 className="flex justify-center text-6xl transition-opacity duration-1000 ease-in-out">Hello, My name is</h2>
                <h1 className="flex justify-center text-8xl transition-opacity duration-1000 ease-in-out">Jesse Draper</h1>
                <br/>
                <p className=" flex justify-center italic text-4xl space-y-10">Web Developer, Hockey player, Technology Enthusiast.</p>
                <p className="text-4xl space-y-10"></p>
                <p className="text-4xl space-y-10"> </p>
                <p className="text-4xl space-y-10 indent-4">Welcome to my Portfolio! I have spent 4 years learning web development and computer science. I will be graduating from SNHU with my BSCS with emphasis in cyber security December 2024 as well as recieved a cetificate of completion for a full-stack bootcamp offered through DU. I am 
                    a passionate learner with a desire to extend my capabilites and create applications that make a difference in the world!
                </p>
            </div>
            <div className="flex justify-center">
                <Image className='pb-10' src='/profile.jpg' alt="picture filler" height='200' width='200' />
            </div>
        </>
    )
}