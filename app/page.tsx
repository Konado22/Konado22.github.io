//==============================================================================================
//Name:Jesse Draper
//BS Computer Science w/ Cybersecurity emphasis || DU Fullstack Bootcamp Graduate
// Thank you for viewing my portfolio
//
//===============================================================================================
import Navbar from "./navbar/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="m-10 pt-20">
        <h1 className="p-10 text-4xl flex justify-center font-bold">Welcome to my Website!</h1>
      </div>
      <div className="p-10 space-y-4 ">
        <br></br>
        <h1 className="text-4xl leading-loose p-10 m-10">
          I am a full-stack developer with a strong foundation in computer
          science, security-focused development, and modern web technologies.
          With experience gained through SNHU’s BSCS program (cybersecurity
          emphasis), the University of Denver’s Trilogy Full-Stack Bootcamp, and
          hands-on projects in Next.js, PostgreSQL, and C++, I bring a
          combination of practical engineering skills and academic rigor. I
          excel at building dynamic, modular interfaces, writing clean and
          maintainable code, and implementing secure development practices
          across the full software lifecycle. My background includes applying
          industry-standard techniques in mobile-first design, user-centric
          architecture, and agile methodologies, including sprint planning,
          documentation, and stakeholder communication.
        </h1>
            <h1 className="text-4xl leading-loose p-10 m-10"> 
              Using the navbar above please take a look at the about me section to 
              learn more about me and my career. Projects can be found also with their 
              respective Github links and information regarding them. I have also added
              a section containing contact information for job opportunities or 
              collaboration on projects as I am available.
            </h1>
      </div>
    </>
  );
}
