import Navbar from "../navbar/navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="mt-10 pt-20 text-4xl">
        <h1 className="p-10 flex justify-center font-bold">Contact Me</h1>
        <h2 className="p-10 text-4xl leading-loose">
          Thank you for taking the time to view my website and the skills that I
          have been developing. I hope to continue developing my skills in web
          development further as well as continue my journey of learning more
          tools and capabilities that I can provide. If there is immediate
          opening for a position that you believe I fit please contact me via my
          business email below. To see further information regarding me and my
          career please check out my LinkedIn profile as well as my Github
          profile.
        </h2>
        <div className="flex flex-row">
          <h2>Email:jessedraper2@gmail.com</h2>
          <h2>Github: Konado22</h2>
        </div>
      </div>
    </>
  );
}
