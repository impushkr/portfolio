import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

<FaLinkedin size={20} className="text-white" />
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      {/* For Desktop */}
      <section>
        <div className="hidden md:block min-w-full h-[50vh] md:h-[33vh] lg:h-[30vh] xl:h-[60vh] overflow-hidden relative mt-18 ">
          <img
            src="src/assets/Hero.png"
            alt="Hero"
            className="hidden md:block absolute w-full h-full object-cover"
          />
          <img
            src="src/assets/My.png"
            alt="My Picture"
            className="hidden md:block absolute right-18 lg:right-30 xl:right-50 bottom-0 h-[30vh] lg:h-[30vh] xl:h-[60vh]"
          />
          <div className="absolute overflow-hidden items-start bottom-3 lg:bottom- mx-3 md:left-5 lg:left-8 flex flex-col gap-2 lg:gap-3  ">
            <div className="inline-flex gap-2 items-center justify-center px-2 py-1 border border-white text-xs xl:text-sm rounded-3xl">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <p>Frontend Developer</p>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">Hi, I'm</h1>
              <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Pushkar Singh
              </h1>
            </div>
            <h2 className="w-[40vw] text-lg md:text-base xl:text-lg font-semibold">
              React.js Developer | Building Modern & Responsive Web Experiences
            </h2>

            <h3 className="w-[46vw] lg:w-[40vw] text-gray-400 text-xs lg:text-sm xl:text-base">
              I build responsive, user-friendly, and performant web applications
              using React.js , Tailwind CSS and modern frontend technologies.
            </h3>

            <div className="flex justify-center items-center gap-4 mt-2 ">
              <Link to={"projects"}>
                <button className="rounded-2xl font-semibold bg-gradient-to-r from-purple-700 to-blue-500 text-center flex justify-center gap-3 items-center px-3 py-3 xl:py-2 text-xs lg:text-base xl:text-lg w-[15vw] xl:w-[11vw]">
                  View My Work »
                </button>
              </Link>
              <a
                href="mailto:pushkar-singh@zohomail.in"
                className="rounded-2xl font-semibold border border-purple-500 text-center flex justify-center gap-3 items-center px-3 py-3 lg:py-3 xl:py-2 text-xs lg:text-base xl:text-lg w-[16vw] lg:w-[15vw] xl:w-[11vw]"
              >
                Contact Me <FiMail className="size-5 md:size-4 lg:size-5 " />
              </a>
            </div>
            <div className="flex justify-center gap-5 pl-3 xl:w-[12vw] mt-2 lg:pl-7 xl:pr-14">
              <a href="https:/wa.me/+916239799932"><FaWhatsapp className="md:size-4 xl:size-5"/></a>
              <a href="https://linkedin.com/in/impushkar"><FaLinkedin className="size-5 md:size-4 xl:size-5"/></a>
              <a href="https://github.com/impushkr"><FaGithub className="md:size-4 xl:size-5"/></a>
            </div>
          </div>
        </div>
        

        {/*For Mobile  */}
        <div className="overflow-hidden items-start mx-3 flex flex-col gap-2 mt-[10vh] md:hidden">
            <div className="inline-flex gap-2 items-center justify-center px-2 py-1 border border-white text-xs rounded-3xl">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <p>Frontend Developer</p>
            </div>
            <div>
              <h1 className="text-3xl font-semibold">Hi, I'm</h1>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Pushkar Singh
              </h1>
            </div>
            <h2 className="text-lg font-semibold">
              React.js Developer | Building Modern & Responsive Web Experiences
            </h2>

            <h3 className=" text-gray-400 text-sm">
              I build responsive, user-friendly, and performant web applications
              using React.js , Tailwind CSS and modern frontend technologies.
            </h3>

            <div className="flex justify-center items-center gap-4 mt-2 flex-col w-[94vw] ">
              <Link to={"projects"}>
                <button className="rounded-2xl font-semibold bg-gradient-to-r from-purple-700 to-blue-500 text-center flex justify-center gap-3 items-center px-3 py-3 w-[90vw]">
                  View My Work »
                </button>
              </Link>
              <a
                href="mailto:pushkar-singh@zohomail.in"
                className="rounded-2xl font-semibold border border-purple-500 text-center flex justify-center gap-3 items-center px-3 py-3 w-[90vw]"
              >
                Contact Me <FiMail className="size-5" />
              </a>
            </div>
            <div className="flex justify-center gap-5 pl-3 w-[90vw] mt-2">
              <a href="https:/wa.me/+916239799932"><FaWhatsapp className="size-5"/></a>
              <a href="https://linkedin.com/in/impushkar"><FaLinkedin className="size-5"/></a>
              <a href="https://github.com/impushkr"><FaGithub className="size-5"/></a>
            </div>
          </div>
      </section>
    </>
  );
}
