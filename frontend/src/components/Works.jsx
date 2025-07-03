import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { github, live } from "../assets";
import { projects, games, designs } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const categories = ["Projects", "Games", "Designs"];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_project_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      whileTap={{ scale: 0.97 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full shadow-lg cursor-pointer"
    >
      <div className="relative w-full h-[200px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 gap-2 opacity-0 hover:opacity-100 transition-opacity">
          <div
            onClick={() => window.open(live_project_link, "_blank")}
            className="green-pink-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={live} alt="live" className="w-1/2 h-1/2 object-contain" />
          </div>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-lg">{name}</h3>
        <p className="mt-1 text-secondary text-sm">{description}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`${tag.color} text-xs`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const DesignCard = ({ title, videoSrc }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className="bg-tertiary rounded-2xl overflow-hidden relative w-[320px] h-[200px] cursor-pointer flex justify-center items-center"
    >
      {/* Title (visible by default) */}
      <div className="absolute inset-0 flex justify-center items-center text-white text-lg font-bold z-10 hover:opacity-0 transition-opacity duration-300">
        {title}
      </div>

      {/* Video or GIF (hidden by default) */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
    </motion.div>
  );
};


const Works = () => {
  const [activeCategory, setActiveCategory] = useState("Projects");

  let dataToShow = [];
  if (activeCategory === "Projects") dataToShow = projects;
  if (activeCategory === "Games") dataToShow = games;
  if (activeCategory === "Designs") dataToShow = designs;

  return (
    <>
      <h2 className={styles.sectionHeadText}>My Work</h2>
      {/* Top navbar */}
      <div className="flex justify-center mt-8 gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition 
              ${
                activeCategory === cat
                  ? "bg-tertiary text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-tertiary hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Animated content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-12 flex flex-wrap gap-7 justify-center"
        >
          {activeCategory === "Designs"
            ? dataToShow.map((design, index) => (
                <DesignCard
                  key={index}
                  title={design.name}
                  videoSrc={design.videoSrc}
                />
              ))
            : dataToShow.map((project, index) => (
                <ProjectCard key={index} index={index} {...project} />
              ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "");
