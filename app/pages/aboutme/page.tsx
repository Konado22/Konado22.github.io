export default function AboutMe() {

    return (

        <div>
            <h1 className=" p-10 text-5xl">Professional Self-Assessment</h1>
            <div>
                <p className="p-10 text-pretty">Hello and welcome to my Portfolio. I have been a student in the Computer Science Program
                for roughly 2 1/2 years. Prior to attending SNHU (Southern New Hampshire University)
                I completed a full-stack web development bootcamp offered through DU (University of Denver).
                I have always enjoyed problem solving and found through these experiences my desire to create
                applications and technology using the skills I have developed.
                </p>
                <p className="p-10 text-pretty">As I look towards the future of my career I aim to utilize the skills
                    developed within the BSCS program with emphasis in cybersecurity. Desires include becoming
                    a full-stack or front-end engineer. Utilizing skills in various languages, storage options, and
                    understanding the role of myself and others in cybersecurity I believe I truly have a solid
                    foundation to become a very capable developer with significant understanding of security implementation
                    and policies as well as their importance. 
                </p>
            </div>
            <div className="grid justify-center">
            <button className=" p-2 hover:shadow-2xl hover:font-bold  bg-white border-4 rounded border-green-400">View my <br/> Code Review</button>
            </div>
        </div>
    )
}