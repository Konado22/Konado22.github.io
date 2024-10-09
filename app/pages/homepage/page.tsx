import Image from "next/image";
export default function Homepage() {

    return (
        <>
            <div className="space-y-20 flex flex-col align-middle p-10">
                <h2 className="text-6xl">Hello, My name is</h2>
                <h1 className="text-8xl">Jesse Draper</h1>
                <p>I love to code and design websites.  </p>
            </div>
            <div>
                <Image src='/profile.jpg' alt="picture filler" height='200' width='200' />
            </div>
        </>
    )
}