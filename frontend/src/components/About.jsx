import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';
import { saurav } from '../assets';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Introduction Section with Photo */}
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>About</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] whitespace-pre-line'
          >
            {`Yo I'm Saurav — a curious developer, designer, and creator who loves turning ideas into real things. Whether it's building fun games, coding web apps, designing cool 3D models, or creating engaging videos, I enjoy exploring different ways to express creativity through technology.

          When I'm not coding or designing, you’ll probably find me watching anime, playing games, or blabbering about Japan.
          My goal? To keep learning and build awesome things.

          Thanks for stopping by! <3`}
          </motion.p>
        </div>

        {/* Photo with Animated Lighting Effect */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="flex justify-center items-center mt-10 lg:mt-0"
        >
          <motion.div
            className="relative w-[250px] h-[250px] rounded-full p-[4px]"
            animate={{
              boxShadow: [
                "0 0 20px rgba(128, 93, 238, 0.5)",
                "0 0 30px rgba(255, 105, 180, 0.5)",
                "0 0 20px rgba(128, 93, 238, 0.5)",
              ],
              background: [
                "linear-gradient(to right, #804dee, #ff6eb9)",
                "linear-gradient(to right, #ff6eb9, #804dee)",
                "linear-gradient(to right, #804dee, #ff6eb9)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <img
              src={saurav}
              alt="Saurav"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
