import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="border-t border-white/10 mt-10 ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold">
              Pushkar
              <span className="text-purple-500">.</span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-sm leading-7">
              Frontend Developer passionate about building modern, responsive
              and user-friendly web applications.
            </p>
          </div>

          {/* Navigation */}
          <ul className="flex flex-wrap justify-center gap-8 text-gray-300">
            {links.map((item) => (
              <Link to={item.path}>
                <li className="hover:text-purple-400 transition">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex gap-5 text-2xl">
            <a
              href="https:/wa.me/+916239799932"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex justify-center items-center hover:bg-purple-600 transition"
            >
              <FaWhatsapp className="md:size-4 xl:size-5" />
            </a>

            <a
              href="https://github.com/impushkr"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex justify-center items-center hover:bg-purple-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/pushkar-singh-2572542b1"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex justify-center items-center hover:bg-purple-600 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:pushkar-singh@zohomail.in"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex justify-center items-center hover:bg-purple-600 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Divider */}

        <div className="h-px bg-white/10 my-8"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Pushkar Singh. All Rights Reserved.
          </p>

          <p>Built with ❤️ using React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
