import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

<FaLinkedin size={20} className="text-white" />
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      
      <section>
        {/* For Desktop */}
        <section className="relative mt-20 hidden overflow-hidden md:block md:min-h-[420px] lg:min-h-[480px] xl:min-h-[65vh]">
  {/* Background */}
  <img
    src="/Hero.png"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Readability overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

  {/* Photo */}
  <img
    src="/My.png"
    alt="Pushkar Singh"
    className="pointer-events-none absolute bottom-0 right-16 h-[90%] w-auto max-w-[40%] object-contain object-bottom lg:right-28 xl:right-40"
  />

  {/* Content */}
  <div className="relative z-10 flex h-full min-h-[inherit] items-center px-6 py-10 lg:px-10 lg:py-14 xl:px-16">
    <div className="flex max-w-[58%] flex-col items-start gap-3 lg:max-w-xl xl:max-w-2xl xl:gap-4">
      <div className="inline-flex items-center gap-2 rounded-3xl border border-white/80 px-3 py-1 text-xs xl:text-sm">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        <p>Frontend Developer</p>
      </div>

      <h1>
        <span className="block text-3xl font-semibold lg:text-4xl xl:text-5xl">
          Hi, I'm
        </span>
        <span className="block bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text pb-1 text-4xl font-bold leading-tight text-transparent lg:text-5xl xl:text-7xl">
          Pushkar Singh
        </span>
      </h1>

      <h2 className="text-base font-semibold xl:text-lg">
        React.js Developer | Building Modern & Responsive Web Experiences
      </h2>

      <p className="text-xs text-gray-300 lg:text-sm xl:text-base">
        I build responsive, user-friendly, and performant web applications
        using React.js, Tailwind CSS and modern frontend technologies.
      </p>

      <div className="mt-2 flex flex-wrap items-center gap-3 sm:gap-4">
        <Link
          to="projects"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-gradient-to-r from-purple-700 to-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:px-6 lg:text-base xl:text-lg"
        >
          View My Work »
        </Link>

        <a
          href="mailto:pushkar-singh@zohomail.in"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-purple-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500/10 sm:px-6 lg:text-base xl:text-lg"
        >
          Contact Me
          <FiMail className="size-4 lg:size-5" />
        </a>
      </div>

    </div>
  </div>
</section>
        

        {/*For Mobile  */}
        <div className="overflow-hidden items-start mx-3 flex flex-col gap-2 mt-[10vh] pb-5 md:hidden">
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
            {/* <div className="flex justify-center gap-5 pl-3 w-[90vw] mt-2">
              <a href="https:/wa.me/+916239799932"><FaWhatsapp className="size-5"/></a>
              <a href="https://linkedin.com/in/impushkar"><FaLinkedin className="size-5"/></a>
              <a href="https://github.com/impushkr"><FaGithub className="size-5"/></a>
            </div> */}
          </div>
      </section>
    </>
  );
}
