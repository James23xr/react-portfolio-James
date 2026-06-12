import { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/JamesLogo.png";
import { LINKS, NAV_LINKS } from "../constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav
        aria-label="Primary"
        className="mb-12 flex items-center justify-between py-6 lg:mb-20"
      >
        <a href="#home" aria-label="Back to top" className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="James Fei-Baffoe logo" width="60" height="36" />
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-neutral-400 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors duration-300 hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-neutral-700 px-4 py-1.5 text-sm font-medium text-neutral-300 transition-colors duration-300 hover:border-neutral-400 hover:text-white sm:block"
          >
            Résumé
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-2xl text-white transition-colors duration-300 hover:text-gray-300"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-2xl text-white transition-colors duration-300 hover:text-gray-300"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-2xl text-white lg:hidden"
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul
          id="mobile-menu"
          className="mb-12 flex flex-col items-center gap-6 rounded-2xl border border-neutral-800 bg-neutral-950/80 py-8 text-lg text-neutral-300 backdrop-blur lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-neutral-700 px-5 py-2 text-base font-medium"
            >
              Résumé
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
