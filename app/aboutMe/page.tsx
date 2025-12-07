// import Navbar from "../navbar/navbar";

export default function AboutMe() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex items-center flex-col mt-10 pt-20 ">
        <h1 className="p-10 flex justify-center text-4xl leading-loose font-bold">
          Welcome to my Website <br />
        </h1>
        <div className="p-10">
          <h2 className="p-10 text-3xl leading-loose">
            Hi, I’m Jesse Draper — a web developer with a strong foundation in
            computer science and a passion for building clean, efficient, and
            user-focused applications. I graduated from Southern New Hampshire
            University with a Bachelor of Arts in Computer Science,
            concentrating in Cyber Security, and I completed a Full-Stack Web
            Development Bootcamp through the University of Denver.
          </h2>
          <h2 className="p-10 text-3xl leading-loose">
            Over the years, I’ve built numerous applications across multiple
            programming paradigms and languages, including Java, JavaScript,
            C++, and Python. My development experience spans modern frameworks
            such as React, Next.js, and Dash, along with hands-on work in
            MongoDB, PostgreSQL, and MySQL.
          </h2>
          <h2 className="p-10 text-3xl leading-loose">
            I’m driven by problem-solving and continuous improvement — whether
            that’s optimizing a backend workflow, refining UI components, or
            deploying full-stack applications. I enjoy transforming ideas into
            scalable, maintainable solutions that balance performance,
            accessibility, and user experience. I also bring several skills
            commonly sought in entry-level web development roles, including:
          </h2>
          <ul>
            <li className="p-10 text-3xl">
              Responsive UI/UX Development using modern CSS frameworks and
              component libraries
            </li>
            <li className="p-10 text-3xl">RESTful API design and integration</li>
            <li className="p-10 text-3xl">
              Version control with Git & GitHub (branching, PRs, workflow
              organization)
            </li>
            <li className="p-10 text-3xl">Agile/Scrum collaboration and sprint-based development</li>
            <li className="p-10 text-3xl">
              Authentication & authorization basics (JWT, sessions, OAuth
              workflows)
            </li>
            <li className="p-10 text-3xl">
              Cloud deployment experience with platforms like Vercel, Netlify,
              and AWS basics
            </li>
            <li className="p-10 text-3xl">
              Debugging, testing, and code quality practices (unit testing,
              linting, documentation)
            </li>
          </ul>
          <h2 className="p-10 text-3xl leading-loose">
            I’m always eager to learn new technologies, contribute to impactful
            projects, and continue growing as a developer. My goal is to create
            thoughtful, secure, and intuitive digital experiences — and to keep
            leveling up one project at a time.
          </h2>
          <h2 className="p-10 text-3xl leading-loose font-bold">Accolades:</h2>
          <ul>
            <li className="p-10 text-3xl leading-loose">8x Honor Roll</li>
            <li className="p-10 text-3xl leading-loose">Presidents List</li>
            <li className="p-10 text-3xl leading-loose">Deans List</li>
            <li className="p-10 text-3xl leading-loose">3.5 GPA</li>
            <li className="p-10 text-3xl leading-loose">BACS with emphasis in cybersecurity</li>
            <li className="p-10 text-3xl leading-loose">Certificate of completion Trilogy Full-stack Bootcamp</li>
          </ul>
        </div>
      </div>
    </>
  );
}
