import Link from "next/link";

export default function AboutMe() {

    return (

        <div>
            <h1 className="p-10 text-6xl font-bold">Professional Self-Assessment</h1>
            <div className="p-10 text-pretty text-2xl indent-4">
                <p>Hello and welcome to my Portfolio. I have been a student in the Computer Science Program
                    for roughly 2 1/2 years. Prior to attending SNHU (Southern New Hampshire University)
                    I completed a Trilogy full-stack web development bootcamp offered through DU (University of Denver). Prior to that I 
                    have spent several years passivly attending community college as a means to continue learning.
                    I have always enjoyed problem solving and found through these experiences my desire to create
                    applications and technology using the skills I have developed. I deeply enjoy creating dynamic interfaces and modular code that can be utilized
                    in front and back end development.
                </p> <br/>
                <p>Through the courses I have taken I have been able to implement security principles and best practices into the code I develop. There are many risks and concerns that exist
                    in web development and through learning about vulernabilities, security principles, and the importance of testing I have become a stronger and more conscious developer. The ability
                    to follow modern day mobile and user centric design principles is essential to user interface development in modern technologies, and utilizing tools that can speed up or increase efficiency are 
                    highly sought assets when building applications and developing software. I have gained a greater understanding of software development lifecycle and the importance of managing expectations and 
                    measurable results through sprints and reviews. Communicating results and progress with stakeholders is essential when developing larger projects that require coordination to a high degree. Managing best naming conventions
                    and practices such as file headers and in-line commenting help manage the success of operating within a team enviornment. Through my explanation and justification of data structures and o-notation in algorithms I showcase
                    my understanding of data structures and best practices for implementing different methodology for different uses. The Traveler application and binary tree assignment I have selected articulate my skills in the areas of software 
                    engineering, data structures and algorithms, as well as databases. My abilities to contribute to collaboration in a team environmnet and communication with stakeholders is apparent through the practices utilized to make the codebase
                    for these applications incredibly readable and easily understandable.
                </p><br/>
                <p>As I arive at the conclusion of my BSCS program I can reflect on the many skills I am able to demonstrate through this portfolio and 
                    work I have completed. Through creation of a full-stack application in NextJS with Postgres I can demonstrate delivering professional-quality
                    communications that are technically sound and coherent. The application utilizes clear documentation through
                    inline commenting as well as headers that inform users of functionality within a file. This demonstrates an ability to create code-review experiences
                    with easily readable and understandable code. Implementation of a new technology in NextJS as well as Postgres demonstrates
                    the ability to use well-founded and innovative techniques to accomplish industry-specific goals.
                    Industry standards for user-centric and mobile-friendly architecture show my understanding of techniques and skills
                    needed to create user friendly applications with simple and easily understandable navigation. <br/><br/>By following conventions built into NextJS
                    I can also demonstrate techniques built into this framework that create more robust and efficient codebase
                    that can be reused throughout the application. NextJS also offers a smart routing potential built into the creation
                    of page files to render routes within an application. Security measures built into Postgres and NextJS handshakes allow for a level of security
                    beyond the traditional capabilities of javascipt. Usage of NextJS sql packages implement built-in security measures against
                    SQL injection. Zod is used within the application to validate user input in forms used to handle requests to the server. Proper error handling is also applied
                    throughout logic within the applicaiton to handled failed request to the server as well as accesing pages that aren`t created. This demonstrates
                    a security mindset that anticipates adversarial exploits in software architecture and designs to expose vulnerabilities.
                    By implementing recursive logic and conversion to a tree data structure for my Cpp Data Sort project I can demonstrate the ability to aproach solving complex logic problems.
                    Through efforts to explain the descision-making and logic that supports the conversion and justification of the data structure I showcase
                    The ability to clearly articulate approaches to solving complex logic problems.<br/><br/>

                </p>
                <p>As I look towards the future of my career I aim to utilize the skills
                    developed within the BSCS program with emphasis in cybersecurity. Desires include becoming
                    a full-stack or front-end engineer. Utilizing skills in various languages, storage options, and
                    understanding the role of myself and others in cybersecurity I believe I truly have a solid
                    foundation to become a very capable developer with significant understanding of security implementation
                    and policies as well as their importance. As I am approaching the end of my bachelor degree program, I am actively looking for any opportunities
                    within the field of computer science and hope to continue developing my understanding of various current technologies in the industry.
                </p>
                <br />
                <div className="space-y-10 mb-10">
                    <h1 className="p-10 text-4xl font-bold">Achievements</h1>
                    <p> 8x Honor Roll</p>
                    <p>President`s List</p>
                    <p>Dean`s List</p>
                    <p>3.5 GPA</p>
                    <p>BACS with emphasis in cybersecurity</p>
                    <p>Certificate of completion Trilogy Full-stack Bootcamp provided through DU</p>
                </div>
                <p className="p-10 text-pretty text-2xl">I cannot wait to dive into the field further. For any business or project inqueries please reach out to me through Github or Gmail.</p>
                <p >Below is a code review conducted on original artifacts from my Computer Science program and enhacements to be made to these assignments <br /></p>

            </div>
            <div className="p-10 grid justify-center">
                <Link href={'https://youtu.be/-FIxub8Hqs0'} target="_blank"><button className="p-5 hover:shadow-2xl hover:font-bold  bg-slate-300 border-2 rounded border-black">View my <br /> Code Review</button></Link>
            </div>
        </div>
    )
}