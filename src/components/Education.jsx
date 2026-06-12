import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div className="flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/4"
        >
          <p className="mb-1 text-sm text-neutral-400">{EDUCATION.graduation}</p>
          <p className="mb-2 text-sm text-neutral-600">{EDUCATION.location}</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h3 className="mb-2 font-semibold">
            {EDUCATION.school}{" "}
            <span className="text-sm text-purple-100">· {EDUCATION.degree}</span>
          </h3>
          <p className="mb-4 inline-block rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            {EDUCATION.gpa}
          </p>
          <h4 className="mb-2 text-sm font-semibold text-neutral-300">Relevant Coursework</h4>
          <div className="mb-6 flex flex-wrap gap-2">
            {EDUCATION.coursework.map((course) => (
              <span
                key={course}
                className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300"
              >
                {course}
              </span>
            ))}
          </div>
          <h4 className="mb-2 text-sm font-semibold text-neutral-300">Awards & Membership</h4>
          <ul className="list-disc space-y-2 pl-5 text-neutral-400 marker:text-neutral-600">
            {EDUCATION.awards.map((award) => (
              <li key={award} className="leading-relaxed">
                {award}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
