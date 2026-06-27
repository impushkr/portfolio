import { FiDownload } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="p-4 fixed top-0 z-50 w-full bg-black/90  shadow-2xl">
        <nav className="flex justify-between md:justify-around items-center">
          <h2 className="text-2xl font-bold">
              Pushkar
              <span className="text-purple-500">.</span>
            </h2>
          <ul className="hidden md:flex md:gap-5 lg:gap-10 xl:gap-12">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? " text-purple-500 pb-2 hover:text-purple-500 font-semibold transition-all duration-300" : "pb-2 hover:text-purple-500 font-semibold"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="/Pushkar's Resume.pdf"
            className="hidden border border-purple-500/40 px-5 py-2 rounded-lg md:flex items-center gap-2 hover:scale-95"
          >
            Download CV <FiDownload />
          </a>

          <button
          className="md:hidden text-purple-500"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>



          {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 z-40 bg-black/95 border-t border-white/10 px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4 text-white">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `block rounded-2xl border border-white/ px-4 py-3 text-lg font-semibold transition ${
                    isActive
                      ? "border-purple-500 text-white"
                      : "text-white hover:bg-white/10"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="/Pushkar's Resume.pdf"
              className="rounded-2xl px-4 py-3 text-lg font-semibold border border-purple-500 text-center flex gap-3 items-center"
            >
              Download CV <FiDownload />
            </a>

            <a
              href="tel:+916239799932"
              className="rounded-full bg-purple-500 py-3 text-center text-sm font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      )}

          
        </nav>
      </header>
    </>
  );
}
