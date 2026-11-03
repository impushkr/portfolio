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
      icon: Briefcase,
      title: "Experience",
      subtitle: "Fresher",
    },
  ];

  const stats = [
    {
      id: 1,
      number: "10+",
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
      <section className="relative mt-20 overflow-hidden py-12 md:py-16 lg:py-20">
  {/* Background (md+ only) */}
  <img
    src="/Hero.png"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 hidden h-full w-full object-cover md:block"
  />
  <div className="absolute inset-0 hidden bg-gradient-to-r from-black/70 via-black/40 to-black/10 md:block" />

  <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:px-10">
    {/* LEFT: Text */}
    <div className="flex flex-col items-start gap-3 lg:gap-4">
      <div className="inline-flex items-center gap-2 rounded-3xl px-3 py-1 shadow md:text-xs xl:text-sm">
        <span className="h-2 w-2 rounded-full bg-purple-400" />
        <span className="font-medium text-purple-400">Get To Know More</span>
      </div>

      <h2 className="flex flex-wrap gap-x-4 text-5xl font-bold md:text-4xl lg:text-5xl xl:text-7xl">
        <span>About</span>
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text pb-1 leading-tight text-transparent">
          Me
        </span>
      </h2>

      <p className="max-w-xl text-sm text-gray-300 lg:text-base">
        I'm a Frontend Developer who loves building clean, modern, and
        responsive web applications. I specialize in React.js and Tailwind
        CSS and enjoy turning ideas into real-world products.
      </p>
      <p className="max-w-xl text-sm text-gray-300 lg:text-base">
        I'm currently pursuing my BCA and constantly learning new
        technologies to grow as a Full Stack Developer.
      </p>

      {/* Highlights */}
      <div className="grid w-full max-w-xl grid-cols-1 gap-4 py-4 sm:grid-cols-2">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 lg:h-12 lg:w-12">
                <Icon className="size-5 text-violet-400 lg:size-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold lg:text-base">{item.title}</h3>
                <p className="text-xs text-gray-400 lg:text-sm">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        to="/contact"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl bg-gradient-to-r from-purple-900 to-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 lg:text-base xl:text-lg"
      >
        Let's Connect »
      </Link>
    </div>

    {/* RIGHT: Photo + Stats */}
    <div className="flex flex-col items-center md:items-end">
      <img
        src="/My.png"
        alt="Pushkar Singh"
        className="hidden h-74 w-auto object-contain object-bottom md:block lg:h-95 xl:h-[26rem]]"
      />

      <div className="grid w-full max-w-md grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:max-w-lg lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.id} className="bg-[#0B1020] p-4 text-center">
            <h3 className="text-xl font-bold text-white">{item.number}</h3>
            <p className="mt-2 text-sm font-medium text-gray-300">{item.title}</p>
            <p className="text-xs text-gray-500">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    </>
  );
}
