import { motion } from "framer-motion";
import { HERO_BADGE, HERO_CONTENT, LINKS } from "../constants";
import profilePic from "../assets/JamesProfile.jpg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 lg:mb-24">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-sm text-neutral-300 lg:mt-16"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              {HERO_BADGE}
            </motion.div>
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="pb-8 pt-6 text-5xl font-thin tracking-tight sm:text-6xl lg:text-8xl"
            >
              James Fei-Baffoe
            </motion.h1>
            <motion.span
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light leading-relaxed tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4 pb-8"
            >
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-neutral-950 transition-colors duration-300 hover:bg-neutral-300"
              >
                View Projects
              </a>
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-700 px-6 py-2.5 text-sm font-semibold text-neutral-300 transition-colors duration-300 hover:border-neutral-400 hover:text-white"
              >
                Download Résumé
              </a>
              <a
                href={`mailto:${LINKS.email}`}
                className="text-sm font-medium text-neutral-400 underline-offset-4 transition-colors duration-300 hover:text-white hover:underline"
              >
                {LINKS.email}
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              src={profilePic}
              alt="Portrait of James Fei-Baffoe"
              width="500"
              height="500"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
