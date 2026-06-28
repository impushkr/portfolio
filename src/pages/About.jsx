import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { User, MapPin, GraduationCap, Briefcase, Rocket } from "lucide-react";

export default function About() {
  const highlights = [
    {
      id: 1,
      icon: User,
      title: "Name",
      subtitle: "Pushkar Singh",
    },
    {
      id: 2,
      icon: GraduationCap,
      title: "Education",
      subtitle: "BCA (2023-2026)",
    },
    {
      id: 3,
      icon: MapPin,
      title: "Location",
      subtitle: "Punjab,India",
    },
    {
      id: 4,
      icon: Rocket,
      title: "Always Learning",
      subtitle: "Exploring backend",
    },
  ];

  const stats = [
    {
      id: 1,
      number: "4+",
      title: "Projects",
      subtitle: "Completed",
    },
    {
      id: 2,
      number: "1+",
      title: "Freelance",
      subtitle: "Project",
    },
    {
      id: 3,
      number: "100%",
      title: "Client",
      subtitle: "Satisfaction",
    },
    {
      id: 4,
      number: "Always",
      title: "Learning",
      subtitle: "New Things",
    },
  ];

  return (
    <>
      <section>
        <div className="block min-w-full md:h-[45vh] xl:h-[60vh] overflow-hidden relative mt-18 ">
          <img
            src="/Hero.png"
            alt="Hero"
            className="hidden md:block absolute w-full h-full object-cover"
          />
          {/* <img
            src="src/assets/My.png"
            alt="My Picture"
            className="hidden md:block absolute right-5 lg:right-10 xl:right-60 bottom-20 h-[35vh] xl:h-[50vh]"
          /> */}
          <div className="hidden md:block absolute right-5 lg:right-10 xl:right-60 bottom-20">
            <img
              src="/My.png"
              alt="My Picture"
              className=" h-[35vh] xl:h-[50vh] relative"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-white/10 bg-[#0B1020] overflow-hidden absolute md:bottom-[-4vh] lg:bottom-[-1vw] xl:bottom-[-4vh] p-4 right-0 lg:left-8 xl:left-5 md:w-[50vw] lg:w-auto">
              {stats.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-2 text-center ${
                    index !== stats.length - 1 ? "border-r border-white/10" : ""
                  }`}
                >
                  <h2 className="text-xl font-bold text-white">
                    {item.number}
                  </h2>

                  <p className="mt-3 text-gray-300 text-sm font-medium">
                    {item.title}
                  </p>

                  <p className="text-gray-500 text-xs">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:absolute overflow-hidden items-start top-5 lg:top-20 xl:top-5 mx-3 md:left-5 lg:left-8 flex flex-col gap-2 lg:gap-3">
            <div className="flex items-center space-x-1 px-2 py-1 shadow  md:text-xs xl:text-sm rounded-3xl">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span className="text-purple-400 font-medium">
                Get To Know More
              </span>
            </div>
            <div className="space-x-4">
              <span className="text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
                About
              </span>
              <span className="text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Me
              </span>
            </div>
            <h3 className="md:w-[46vw] lg:w-[40vw] text-gray-400 md:text-xs lg:text-sm xl:text-base">
              I'm a Frontend Developer who loves building clean, modern, and
              responsive web applications. I specialize in React.js and Tailwind
              CSS and enjoy turning ideas into real-world products.
            </h3>
            <h3 className="md:w-[46vw] lg:w-[40vw] text-gray-400 md:text-xs lg:text-sm xl:text-base">
              I'm currently pursulng my BCA and constantly learning new
              technologies to grow as a Full Stack Developer.
            </h3>

            <div className="py-4 rounded-2xl flex flex-wrap gap-2 flex-col md:flex-row md:justify-evenly w-full md:w-[52vw] lg:w-[40vw] xl:w-[30vw]">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="flex gap-4 w-auto p-2 md:p-0 md:w-[25vw] lg:w-[19vw] xl:w-[13vw]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center">
                      <Icon size={22} className="text-violet-400" />
                    </div>

                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full md:w-auto flex justify-center">
              <Link to={"/contact"}>
                <button className="rounded-2xl font-semibold bg-gradient-to-r from-purple-900 to-blue-500 text-center flex justify-center gap-3 items-center px-30 py-3 md:px-3 md:py-3 xl:py-2  md:text-xs lg:text-base xl:text-lg  md:w-[15vw] xl:w-[11vw]">
                  Let's Connect »
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-white/10 bg-[#0B1020] overflow-hidden absolute right-40 bottom-10 p-4">
            {stats.map((item, index) => (
              <div
                key={item.id}
                className={`p-4 text-center ${
                  index !== stats.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <h2 className="text-2xl font-bold text-white">{item.number}</h2>

                <p className="mt-3 text-gray-300 font-medium">{item.title}</p>

                <p className="text-gray-500">{item.subtitle}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}
