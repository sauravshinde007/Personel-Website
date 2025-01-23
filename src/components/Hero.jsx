import { motion } from 'framer-motion';
import { styles } from '../styles';
import { PCCanvas } from './canvas';
import { Typewriter } from 'react-simple-typewriter';
import { avatar } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          {/* Name */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#915eff]">Saurav</span>
          </h1>
          {/* Details */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop
          </p>
          <p className={`${styles.sectionHeadText}`}>
            {/* Typewriter effect */}
            <span style={{ color: '#915eff', fontWeight: 'bold' }}>
              <Typewriter
                words={['Games', 'Web Apps', '3D Models', 'Videos']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={60}
                delaySpeed={2000}
              />
            </span>
          </p>
        </div>
      </div>

      {/* PC Model with Adjusted Position */}
        <PCCanvas />

      {/* Avatar Section */}
      <motion.div
        className="absolute inset-y-0 right-0 flex items-center justify-end p-10"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <img
          src={avatar} // Correctly use the imported avatar image
          alt="Avatar"
          className="w-96 h-96 sm:w-72 sm:h-72 rounded-full object-cover"
        />
      </motion.div>


      <div className="absolute bottom-10 xs:bottom-20 sm:bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
