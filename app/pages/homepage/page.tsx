import Image from "next/image";
export default function Homepage() {

    return (
        <>
            <div className="space-y-20 flex flex-col p-10">
                <h2 className=" -indent-10 flex justify-center text-6xl">Hello, My name is</h2>
                <h1 className="flex justify-center indent-10 text-8xl">Jesse Draper</h1>
                <p className="text-4xl space-y-10">Web Developer, Hockey player, Technology Enthusiast.</p>
                <p className="text-4xl space-y-10"></p>
                <p className="text-4xl space-y-10"> </p>
                <p className="text-4xl space-y-10">Welcome to my Portfolio! I have spent 4 years learning web development and will be graduating from SNHU with my BSCS with emphasis in cyber security December 2024. I am 
                    a passionate learner with a desire to extend my capabilites and create applications that make a difference.
                </p>
            </div>
            <div>
                <Image src='/profile.jpg' alt="picture filler" height='200' width='200' />
            </div>
        </>
    )
}