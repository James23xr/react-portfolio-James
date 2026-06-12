import { LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-900 py-8 text-center text-sm text-neutral-500">
      <p>
        © {new Date().getFullYear()} James Fei-Baffoe ·{" "}
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 transition-colors duration-300 hover:text-white hover:underline"
        >
          Built with React, Vite & Tailwind CSS
        </a>
      </p>
    </footer>
  );
};

export default Footer;
