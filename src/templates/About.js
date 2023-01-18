import React,{useState} from "react";

export default function About() {
    const [bio,setBio] = useState('Frontend Development Enthusiast')
    const handleBioChange = () =>{
        (bio=='Frontend Development Enthusiast'?setBio('Freelance Music Producer') :setBio('Frontend Development Enthusiast') )
    }
  return (
    
    <section id="about" className="bg-blue-700 h-screen">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-white">
            Hey, I'm Kankshit
            <br/>{bio}
          </h1>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded" onClick={handleBioChange}>Toggle Title</button>
          <p className="mt-10 mb-8 text-white text-lg leading-relaxed">
          Meet Kankshit, a talented frontend developer and music producer. He is skilled in HTML, CSS, and JavaScript, and has an actively curious mind to learn more of user experience and design principles. In addition to his web development work, John is also an accomplished music producer, with a portfolio of original tracks and remixes that showcase his creativity and technical expertise. Whether you're looking for a new website or looking for a fresh sound for your next project, Kankshit is the perfect choice.
          <br />
          - ChatGPT
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full w-fit ">
          <img
            className=" rounded shadow-2xl"
            alt="hero"
            src="https://media.licdn.com/dms/image/D4D03AQG_WQg-0tUGlA/profile-displayphoto-shrink_400_400/0/1667449321924?e=1679529600&v=beta&t=A9ej4LNuU8WRTRCZPDQTXgYzXUNUU5N5FGETDpkpcvw"
          />
        </div>
      </div>
    </section>
  );
}