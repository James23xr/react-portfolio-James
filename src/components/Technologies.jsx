import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandTypescript, TbBrandCpp } from "react-icons/tb";
import {
  SiTensorflow,
  SiPytorch,
  SiJavascript,
  SiFlask,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
} from "react-icons/si";
import { DiPython, DiJava } from "react-icons/di";
import { FaAws } from "react-icons/fa";

const TECHNOLOGIES = [
  { name: "Python", icon: DiPython, color: "text-blue-500", duration: 2.5 },
  { name: "Java", icon: DiJava, color: "text-red-500", duration: 3 },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", duration: 5 },
  { name: "TypeScript", icon: TbBrandTypescript, color: "text-blue-600", duration: 2 },
  { name: "C++", icon: TbBrandCpp, color: "text-blue-700", duration: 4.5 },
  { name: "React", icon: RiReactjsLine, color: "text-cyan-400", duration: 6 },
  { name: "Next.js", icon: TbBrandNextjs, color: "text-white", duration: 4 },
  { name: "Flask", icon: SiFlask, color: "text-neutral-200", duration: 3.5 },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-600", duration: 5.5 },
  { name: "Docker", icon: SiDocker, color: "text-blue-400", duration: 2.8 },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500", duration: 4.2 },
  { name: "AWS", icon: FaAws, color: "text-orange-400", duration: 3.2 },
  { name: "Kafka", icon: SiApachekafka, color: "text-neutral-100", duration: 5.2 },
  { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500", duration: 3.8 },
  { name: "PyTorch", icon: SiPytorch, color: "text-orange-600", duration: 4.8 },
];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.ul
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {TECHNOLOGIES.map((tech) => (
          <motion.li
            key={tech.name}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4"
          >
            <tech.icon className={`text-6xl ${tech.color}`} aria-hidden="true" />
            <span className="text-xs font-medium text-neutral-400">{tech.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
