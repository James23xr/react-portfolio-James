import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { CONTACT, LINKS } from "../constants";

const Contact = () => {
  return (
    <div className="pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-xl text-center"
      >
        <p className="my-4 leading-relaxed text-neutral-400">{CONTACT.blurb}</p>
        <p className="my-4 text-sm text-neutral-500">{CONTACT.location}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-neutral-950 transition-colors duration-300 hover:bg-neutral-300"
          >
            <FaEnvelope aria-hidden="true" />
            {CONTACT.email}
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-2.5 text-sm font-semibold text-neutral-300 transition-colors duration-300 hover:border-neutral-400 hover:text-white"
          >
            <FaLinkedin aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-2.5 text-sm font-semibold text-neutral-300 transition-colors duration-300 hover:border-neutral-400 hover:text-white"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
